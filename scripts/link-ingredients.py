import pathlib,json
R=pathlib.Path(__file__).resolve().parents[1]
m={'bissap':['bissap'],'gnamakoudji':['gingembre'],'ananas':['ananas'],'mangue':['mangue'],'tomi':['tamarin'],'bouye':['baobab'],'passion':['passion'],'goyave':['goyave'],'corossol':['corossol'],'coco':['coco'],'orange':['orange'],'citron':['citron'],'papaye':['papaye'],'pasteque':['pasteque'],'canne':['canne'],'madd':['madd'],'ditakh':['ditakh'],'pomme-cajou':['pomme-cajou'],'ananas-gingembre':['ananas','gingembre'],'bissap-gingembre':['bissap','gingembre'],'mangue-passion':['mangue','passion'],'citron-menthe':['citron','menthe'],'carotte-orange':['carotte','orange'],'ananas-coco':['ananas','coco']}
p=json.loads((R/'data/products.json').read_text())
for x in p:x['ingredients']=[{'id':s,'image':f'assets/ingredients/{s}.png'} for s in m[x['id']]]
(R/'data/products.json').write_text(json.dumps(p,ensure_ascii=False,indent=2))
(R/'data/spiral.json').write_text(json.dumps({'spriteCount':7,'radius':.82,'verticalSpan':2.5,'turns':1.6,'scrollTurns':2,'billboard':True,'reducedMotion':'static composition','axis':'Y','depthOcclusion':True,'sizeRange':[.28,.48],'note':'Sprites PNG avec profondeur 3D, pas modèles volumétriques des fruits.'},indent=2))
