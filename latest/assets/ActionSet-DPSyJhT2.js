import{p as j,j as y,B as f}from"./settings-BiUEFdm2.js";import{R as k}from"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{c as x}from"./deprecate-D9ms-jbM.js";import{p as q,a as I}from"./props-helper-1oU9hECe.js";import{B as O}from"./ButtonSet-CqsYbwZH.js";import{I as _}from"./InlineLoading-DEQVZSgg.js";const i=`${j.prefix}--action-set`,C="ActionSet",z=k.forwardRef(({className:t,disabled:r,kind:h,label:n,loading:c,isExpressive:d=!0,...o},e)=>y.jsxs(f,{...o,isExpressive:d,className:x(t,[`${i}__action-button`,{[`${i}__action-button--ghost`]:h==="ghost"||h==="danger--ghost",[`${i}__action-button--expressive`]:d}]),disabled:r||c||!1,kind:h,ref:e,children:[n,c&&y.jsx(_,{})]}));z.displayName="ActionSetButton";z.propTypes={...f.PropTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool};const w="primary",T=(t,r)=>t==="sm"||t==="md"&&r>2,A={size:"md"},g=k.forwardRef(({actions:t,buttonSize:r,className:h,size:n=A.size,...c},d)=>{var s;const o=t&&((s=t.slice)==null?void 0:s.call(t,0))||[],e=T(n,o.length),p=l=>({ghost:1,"danger--ghost":2,danger:4,primary:5})[l]??3;return o.sort((l,m)=>(p(l.kind||w)-p(m.kind||w))*(e?-1:1)),y.jsx(O,{...c,className:x(i,h,{[`${i}--row-single`]:!e&&o.length===1,[`${i}--row-double`]:!e&&o.length===2,[`${i}--row-triple`]:!e&&o.length===3,[`${i}--row-quadruple`]:!e&&o.length>=4,[`${i}--stacking`]:e},`${i}--${n}`),ref:d,role:"presentation",stacked:e,children:o.map((l,m)=>{const u=q(l,["key"]);return y.jsx(z,{...u,size:r},l.key||m)})})});g.displayName=C;g.validateActions=t=>(r,h,n,c,d)=>{const o=d||h,e=r[o],p=e&&(e==null?void 0:e.length),s=[];if(p>0){const l=t?t(r):r.size||A.size,m=T(l,p),u=P=>e.filter(S=>(S.kind||w)===P).length,v=u("primary"),$=u("secondary"),B=u("danger"),b=u("ghost")+u("danger--ghost");m&&p>3&&s.push(`you cannot have more than three actions in this size of ${n}`),p>4&&s.push(`you cannot have more than four actions in a ${n}`),v>1&&s.push(`you cannot have more than one 'primary' action in a ${n}`),b>1&&s.push(`you cannot have more than one 'ghost' action in a ${n}`),m&&p>1&&b>0&&s.push(`you cannot have a 'ghost' button in conjunction with other action types in this size of ${n}`),p>v+$+B+b&&s.push(`you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ${n}`)}return s.length>0?new Error(`Invalid ${c} \`${o}\` supplied to \`${n}\`: ${s.join(", and ")}.`):null};g.propTypes={actions:I([g.validateActions(),a.arrayOf(a.shape({...f.propTypes,kind:a.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:a.string,loading:a.bool,onClick:f.propTypes.onClick}))]),buttonSize:f.propTypes.size,className:a.string,size:a.oneOf(["sm","md","lg","xl","2xl"])};g.__docgenInfo={description:`An ActionSet presents a set of action buttons, constructed from bundles
of prop values and applying some layout rules. When the size is 'sm'
the buttons are stacked, and should only include primary and secondary
kinds. When the size is 'md' the buttons are stacked if there are three or
more. When the size is 'md' or 'lg', two buttons share the horizontal space.
When the size is 'lg', three or more buttons use a quarter of the available
horizontal space, and if the size is 'xlg' or 'max' the buttons always use
a quarter of the available horizontal space. If there is a ghost button,
it appears at the left side. If there is a primary button it appears at the
right.`,methods:[{name:"validateActions",docblock:`A validator function to help validate the actions supplied for a particular
size of component. When the size is sm, or md with three actions, the
buttons will be stacked and a maximum of three buttons is applied with no
ghosts unless the ghost is the only button. Otherwise a maximum of four
buttons with a maximum of one ghost is applied. In either case, a maximum
of one primary button is allowed.
@param sizeFn An optional function which will be passed all the props and
returns the size that the component should be treated as being: if not
provided, a 'size' prop is used to determine the size of the component.
@returns null if the actions meet the requirements, or an Error object with
an explanatory message.`,modifiers:["static"],params:[{name:"sizeFn",description:`An optional function which will be passed all the props and
returns the size that the component should be treated as being: if not
provided, a 'size' prop is used to determine the size of the component.`,optional:!1}],returns:{description:`null if the actions meet the requirements, or an Error object with
an explanatory message.`},description:`A validator function to help validate the actions supplied for a particular
size of component. When the size is sm, or md with three actions, the
buttons will be stacked and a maximum of three buttons is applied with no
ghosts unless the ghost is the only button. Otherwise a maximum of four
buttons with a maximum of one ghost is applied. In either case, a maximum
of one primary button is allowed.`}],displayName:"ActionSet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:`The action buttons to show. Each action is specified as an object
representation of a Carbon button.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  /**@ts-ignore*/
  ActionSet.validateActions(),
  PropTypes.arrayOf(
    PropTypes.shape({
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
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},buttonSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of buttons to use for the actions. The allowed values are
those for the size prop of carbon Button. If this prop is specified, all
the buttons will be set to this size, overriding any 'size' values (if any)
supplied in the actions array (if any).`,type:{name:"custom",raw:"Button.propTypes.size"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ButtonSizes)[number]"},description:`The size of the action set. Different button arrangements are used at
different sizes, to make best use of the available space.`,defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]}}}};export{g as A};
