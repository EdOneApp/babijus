import pathlib,json,struct,math
R=pathlib.Path(__file__).resolve().parents[1]
def model(product):
 blob=bytearray();views=[];acc=[];meshes=[]
 def data(raw,target=None):
  while len(blob)%4:blob.append(0)
  v={'buffer':0,'byteOffset':len(blob),'byteLength':len(raw)}
  if target:v['target']=target
  views.append(v);blob.extend(raw);return len(views)-1
 def accessor(values,typ,component=5126,mins=None,maxs=None):
  width={'SCALAR':1,'VEC2':2,'VEC3':3}[typ];fmt='f' if component==5126 else 'I';v=data(struct.pack('<'+fmt*len(values),*values),34962 if component==5126 else 34963);a={'bufferView':v,'componentType':component,'count':len(values)//width,'type':typ}
  if mins is not None:a.update(min=mins,max=maxs)
  acc.append(a);return len(acc)-1
 def lathe(profile,mat,name,segments=64):
  pos=[];norm=[];uv=[];idx=[]
  for j,(y,r) in enumerate(profile):
   prev=profile[max(j-1,0)];nxt=profile[min(j+1,len(profile)-1)];dy=nxt[0]-prev[0];dr=nxt[1]-prev[1];length=math.hypot(dy,dr) or 1
   for i in range(segments+1):
    t=(-1.12+i/segments*2.24) if name=='Label' else i/segments*math.tau;x=math.sin(t);z=math.cos(t);pos.extend([r*x,y,r*z]);norm.extend([dy*x/length,-dr/length,dy*z/length]);uv.extend([i/segments if name=='Label' else i/segments+.5,1-j/(len(profile)-1)])
  for j in range(len(profile)-1):
   for i in range(segments):
    a=j*(segments+1)+i;b=a+segments+1;idx.extend([a,a+1,b,a+1,b+1,b])
  mins=[min(pos[k::3]) for k in range(3)];maxs=[max(pos[k::3]) for k in range(3)]
  mesh={'name':name,'primitives':[{'attributes':{'POSITION':accessor(pos,'VEC3',mins=mins,maxs=maxs),'NORMAL':accessor(norm,'VEC3'),'TEXCOORD_0':accessor(uv,'VEC2')},'indices':accessor(idx,'SCALAR',5125),'material':mat}]};meshes.append(mesh);return len(meshes)-1
 def rgb(h):return [(int(h[i:i+2],16)/255)**2.2 for i in (1,3,5)]+[1]
 mats=[{'name':'Juice','pbrMetallicRoughness':{'baseColorFactor':rgb(product['color']),'metallicFactor':0,'roughnessFactor':.25}}, {'name':'Glass','pbrMetallicRoughness':{'baseColorFactor':[.91,1,.95,.06],'metallicFactor':0,'roughnessFactor':.08},'alphaMode':'BLEND','doubleSided':True},{'name':'Cap','pbrMetallicRoughness':{'baseColorFactor':rgb('#134833'),'metallicFactor':.65,'roughnessFactor':.28}},{'name':'Label','extensions':{'KHR_materials_unlit':{}},'pbrMetallicRoughness':{'baseColorTexture':{'index':0},'roughnessFactor':.9},'doubleSided':True}]
 profile=[(0,0),(.03,.34),(.08,.38),(1.62,.38),(1.76,.35),(1.93,.24),(2.05,.22),(2.30,.22),(2.32,0)]
 lathe([(y+.04,r*.96) for y,r in profile[:-2]]+[(2.10,.21),(2.10,0)],0,'Liquid')
 lathe(profile,1,'Glass')
 lathe([(2.27,0),(2.27,.24),(2.31,.25),(2.43,.25),(2.45,.22),(2.45,0)],2,'Cap')
 lathe([(.40,.385),(1.48,.385)],3,'Label')
 imageview=data((R/'assets/labels'/f"{product['id']}.png").read_bytes())
 doc={'extensionsUsed':['KHR_materials_unlit'],'asset':{'version':'2.0','generator':'BABI JUS original procedural lathe model'},'scene':0,'scenes':[{'nodes':[0]}],'nodes':[{'name':'Bottle','children':[1,2,3,4]}]+[{'name':m['name'],'mesh':i} for i,m in enumerate(meshes)],'meshes':meshes,'materials':mats,'buffers':[{'byteLength':len(blob)}],'bufferViews':views,'accessors':acc,'images':[{'bufferView':imageview,'mimeType':'image/png'}],'textures':[{'source':0,'sampler':0}],'samplers':[{'magFilter':9729,'minFilter':9987,'wrapS':10497,'wrapT':10497}]}
 js=json.dumps(doc,separators=(',',':')).encode();js+=b' '*((-len(js))%4);blob.extend(b'\0'*((-len(blob))%4));length=12+8+len(js)+8+len(blob)
 (R/'assets/models'/f"{product['id']}.glb").write_bytes(struct.pack('<III',0x46546C67,2,length)+struct.pack('<II',len(js),0x4E4F534A)+js+struct.pack('<II',len(blob),0x004E4942)+blob)
for p in json.loads((R/'data/products.json').read_text()):model(p)
print('24 original GLB models built')
