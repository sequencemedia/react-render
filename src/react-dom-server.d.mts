declare module '#react-render/react-dom-server' {
  type ComponentType = ReactRenderTypes.ComponentType
  type PropsType = ReactRenderTypes.PropsType

  export function getReactDOMServerRenderToString (Component: ComponentType, props: PropsType): string

  export function getReactDOMServerRenderToStaticMarkup (Component: ComponentType, props: PropsType): string
}
