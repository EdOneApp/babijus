import raw from '@/data/stores.json';
export type Store={id:string;name:string;city:string;address:string;lat:number;lng:number;phone?:string;hours?:string;demo:boolean};
export const stores:Store[]=(raw as Store[]).filter(s=>Number.isFinite(s.lat)&&Number.isFinite(s.lng)&&s.lat>=4.1&&s.lat<=11&&s.lng>=-9&&s.lng<=-2.4);
export const cities=[{name:'Toute la Côte d’Ivoire',lat:7.54,lng:-5.55,zoom:7},{name:'Abidjan',lat:5.36,lng:-4.008,zoom:12},{name:'Yamoussoukro',lat:6.827,lng:-5.289,zoom:12},{name:'Bouaké',lat:7.69,lng:-5.03,zoom:12},{name:'San-Pédro',lat:4.748,lng:-6.637,zoom:12},{name:'Korhogo',lat:9.458,lng:-5.63,zoom:12}];
export function distanceKm(a:{lat:number;lng:number},b:{lat:number;lng:number}){const rad=Math.PI/180;const dlat=(b.lat-a.lat)*rad,dlng=(b.lng-a.lng)*rad;const h=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlng/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));}
