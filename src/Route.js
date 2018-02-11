import { parseRoute } from "./parseRoute"

export function Route(props) {
  const location = props.location || window.location
  const match = parseRoute(props.path, location.pathname, {
    exact: !props.parent
  })

  const element = props.render({
      match: match,
      location: location
  })

  if(match){
    const scroll = (e) => e.scrollIntoView({behavior: 'smooth', block:'start'})
    element.attributes.oncreate = scroll
    element.attributes.onupdate = scroll
  }

  return element
}
