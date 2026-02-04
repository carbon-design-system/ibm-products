import{e as h,c as z,p as v,H as $,B as m,P as a}from"./iframe-BBf3bqTv.js";import{B as A}from"./ButtonSet-C3GUdjVj.js";import{I as B}from"./InlineLoading-Iu2BiOBt.js";import{p as P,a as S}from"./props-helper-CYOz70En.js";const r=`${v.prefix}--action-set`,l="ActionSet",b=h.forwardRef(({className:t,disabled:c,kind:e,label:u,loading:s,isExpressive:i=!0,...d},n)=>h.createElement(m,{...d,isExpressive:i,className:z(t,[`${r}__action-button`,{[`${r}__action-button--ghost`]:e==="ghost"||e==="danger--ghost",[`${r}__action-button--expressive`]:i}]),disabled:c||s||!1,kind:e,ref:n},u,s&&h.createElement(B,null)));b.displayName="ActionSetButton";b.propTypes={...m.PropTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool};const f="primary",k=(t,c)=>t==="sm"||t==="md"&&c>2,x={size:"md"},N=({actions:t,size:c})=>{if(t&&t.length){const e=[],u=k(c,t.length),s=y=>t.filter(p=>(p.kind||f)===y).length,i=s("primary"),d=s("secondary"),n=s("danger"),o=s("ghost")+s("danger--ghost");return u&&t.length>3&&e.push(`you cannot have more than three actions in this size of ${l}`),t.length>4&&e.push(`you cannot have more than four actions in a ${l}`),i>1&&e.push(`you cannot have more than one 'primary' action in a ${l}`),o>1&&e.push(`you cannot have more than one 'ghost' action in a ${l}`),u&&t.length>1&&o>0&&e.push(`you cannot have a 'ghost' button in conjunction with other action types in this size of ${l}`),t.length>i+d+n+o&&e.push(`you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ${l}`),e.length>0?$.error(`Invalid prop \`actions\` supplied to \`${l}\`: ${e.join(", and ")}.`):null}},T=h.forwardRef((t,c)=>{const{actions:e,buttonSize:u,className:s,size:i=x.size,...d}=t;N({actions:e,size:i});const n=e&&e.slice?.(0)||[],o=k(i,n.length),y=p=>({ghost:1,"danger--ghost":2,danger:4,primary:5})[p]??3;return n.sort((p,g)=>(y(p.kind||f)-y(g.kind||f))*(o?-1:1)),h.createElement(A,{...d,className:z(r,s,{[`${r}--row-single`]:!o&&n.length===1,[`${r}--row-double`]:!o&&n.length===2,[`${r}--row-triple`]:!o&&n.length===3,[`${r}--row-quadruple`]:!o&&n.length>=4,[`${r}--stacking`]:o},`${r}--${i}`),ref:c,role:"presentation",stacked:o},n.map((p,g)=>{const w=P(p,["key"]);return h.createElement(b,{key:p.key||g,...w,size:u})}))});T.displayName=l;T.propTypes={actions:S([a.arrayOf(a.shape({...m.propTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool,onClick:m.propTypes.onClick}))]),buttonSize:m.propTypes.size,className:a.string,size:a.oneOf(["sm","md","lg","xl","2xl"])};T.__docgenInfo={description:`An ActionSet presents a set of action buttons, constructed from bundles
of prop values and applying some layout rules. When the size is 'sm'
the buttons are stacked, and should only include primary and secondary
kinds. When the size is 'md' the buttons are stacked if there are three or
more. When the size is 'md' or 'lg', two buttons share the horizontal space.
When the size is 'lg', three or more buttons use a quarter of the available
horizontal space, and if the size is 'xlg' or 'max' the buttons always use
a quarter of the available horizontal space. If there is a ghost button,
it appears at the left side. If there is a primary button it appears at the
right.`,methods:[],displayName:"ActionSet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps",elements:[{name:"ReactElementType",raw:"React.ElementType"}],raw:"ButtonProps<React.ElementType>"}],raw:"ButtonProps<React.ElementType>[]"},description:`The action buttons to show. Each action is specified as an object
representation of a Carbon button.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  PropTypes.arrayOf(
    PropTypes.shape({
      /**@ts-ignore*/
      ...Button.propTypes,
      kind: PropTypes.oneOf([
        'ghost',
        'danger--ghost',
        'secondary',
        'danger',
        'primary',
      ]),
      label: PropTypes.string,
      loading: PropTypes.bool,
      // we duplicate this Button prop to improve the DocGen here
      /**@ts-ignore*/
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},buttonSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of buttons to use for the actions. The allowed values are
those for the size prop of carbon Button. If this prop is specified, all
the buttons will be set to this size, overriding any 'size' values (if any)
supplied in the actions array (if any).`,type:{name:"custom",raw:"Button.propTypes.size"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of the action set. Different button arrangements are used at
different sizes, to make best use of the available space.`,type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}}}};export{T as A};
//# sourceMappingURL=ActionSet-ByaSX0Ns.js.map
