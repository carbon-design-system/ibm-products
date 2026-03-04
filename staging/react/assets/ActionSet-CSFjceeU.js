var $=Object.defineProperty;var m=(e,i)=>$(e,"name",{value:i,configurable:!0});import{e as h,c as k,p as A,H as B,B as y,P as a}from"./iframe-LiaStyBs.js";import{B as P}from"./ButtonSet-C_7Ys9Uu.js";import{I as S}from"./InlineLoading-Da6JDjkJ.js";import{p as x,a as N}from"./props-helper-BjdYyuO_.js";const r=`${A.prefix}--action-set`,c="ActionSet",T=h.forwardRef(({className:e,disabled:i,kind:t,label:u,loading:s,isExpressive:p=!0,...d},n)=>h.createElement(y,{...d,isExpressive:p,className:k(e,[`${r}__action-button`,{[`${r}__action-button--ghost`]:t==="ghost"||t==="danger--ghost",[`${r}__action-button--expressive`]:p}]),disabled:i||s||!1,kind:t,ref:n},u,s&&h.createElement(S,null)));T.displayName="ActionSetButton";T.propTypes={...y.PropTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool};const b="primary",w=m((e,i)=>e==="sm"||e==="md"&&i>2,"willStack"),E={size:"md"},_=m(({actions:e,size:i})=>{if(e&&e.length){const t=[],u=w(i,e.length),s=m(g=>e.filter(l=>(l.kind||b)===g).length,"countActions"),p=s("primary"),d=s("secondary"),n=s("danger"),o=s("ghost")+s("danger--ghost");return u&&e.length>3&&t.push(`you cannot have more than three actions in this size of ${c}`),e.length>4&&t.push(`you cannot have more than four actions in a ${c}`),p>1&&t.push(`you cannot have more than one 'primary' action in a ${c}`),o>1&&t.push(`you cannot have more than one 'ghost' action in a ${c}`),u&&e.length>1&&o>0&&t.push(`you cannot have a 'ghost' button in conjunction with other action types in this size of ${c}`),e.length>p+d+n+o&&t.push(`you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ${c}`),t.length>0?B.error(`Invalid prop \`actions\` supplied to \`${c}\`: ${t.join(", and ")}.`):null}},"validateActionSetProps"),z=h.forwardRef((e,i)=>{const{actions:t,buttonSize:u,className:s,size:p=E.size,...d}=e;_({actions:t,size:p});const n=t&&t.slice?.(0)||[],o=w(p,n.length),g=m(l=>({ghost:1,"danger--ghost":2,danger:4,primary:5})[l]??3,"buttonOrder");return n.sort((l,f)=>(g(l.kind||b)-g(f.kind||b))*(o?-1:1)),h.createElement(P,{...d,className:k(r,s,{[`${r}--row-single`]:!o&&n.length===1,[`${r}--row-double`]:!o&&n.length===2,[`${r}--row-triple`]:!o&&n.length===3,[`${r}--row-quadruple`]:!o&&n.length>=4,[`${r}--stacking`]:o},`${r}--${p}`),ref:i,role:"presentation",stacked:o},n.map((l,f)=>{const v=x(l,["key"]);return h.createElement(T,{key:l.key||f,...v,size:u})}))});z.displayName=c;z.propTypes={actions:N([a.arrayOf(a.shape({...y.propTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool,onClick:y.propTypes.onClick}))]),buttonSize:y.propTypes.size,className:a.string,size:a.oneOf(["sm","md","lg","xl","2xl"])};z.__docgenInfo={description:`An ActionSet presents a set of action buttons, constructed from bundles
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
different sizes, to make best use of the available space.`,type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}}}};export{z as A};
//# sourceMappingURL=ActionSet-CSFjceeU.js.map
