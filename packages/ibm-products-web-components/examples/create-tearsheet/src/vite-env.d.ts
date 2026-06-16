declare module '*.scss?lit' {
  import type { CSSResultGroup } from 'lit';
  const styles: CSSResultGroup;
  export default styles;
}

