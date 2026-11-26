import pathlib,json,struct
from PIL import Image
R=pathlib.Path(__file__).resolve().parents[1];errors=[];products=json.loads((R/'data/products.json').read_text());ids=set()
for p in products:
 assert p['id'] not in ids;ids.add(p['id'])
 for rel in [p['label'],p['model']]+([p['photo']] if p['photo'] else [])+[x['image'] for x in p['ingredients']]:
  if not (R/rel).exists():errors.append('missing '+rel)
 path=R/p['model'];raw=path.read_bytes();magic,version,length=struct.unpack_from('<III',raw)
 if magic!=0x46546c67 or version!=2 or length!=len(raw):errors.append('invalid GLB '+p['id'])
 jl,jtype=struct.unpack_from('<II',raw,12);doc=json.loads(raw[20:20+jl]);binary=raw[28+jl:]
 for v in doc['bufferViews']:
  if v.get('byteOffset',0)+v['byteLength']>len(binary):errors.append('buffer overflow '+p['id'])
 for prim in [m['primitives'][0] for m in doc['meshes']]:
  ac=doc['accessors'][prim['indices']];v=doc['bufferViews'][ac['bufferView']];off=v.get('byteOffset',0);idx=struct.unpack_from('<'+'I'*ac['count'],binary,off)
  if max(idx)>=doc['accessors'][prim['attributes']['POSITION']]['count']:errors.append('index overflow '+p['id'])
images=[]
for path in (R/'assets/ingredients').glob('*.png'):
 im=Image.open(path);alpha=im.getchannel('A') if 'A' in im.getbands() else None
 if alpha is None or alpha.getextrema()[0]!=0:errors.append('alpha missing '+path.name)
 images.append({'file':str(path.relative_to(R)),'size':list(im.size),'alpha':alpha.getextrema() if alpha else None})
if len(images)!=20:errors.append(f'expected 20 ingredients, got {len(images)}')
report={'products':len(products),'models':len(list((R/'assets/models').glob('*.glb'))),'ingredientImages':images,'errors':errors}
(R/'docs/verification.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps({'products':len(products),'ingredients':len(images),'errors':errors},ensure_ascii=False));raise SystemExit(bool(errors))
