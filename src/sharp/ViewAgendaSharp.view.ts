import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewAgendaSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 13h18v8H3zM3 3h18v8H3z\"/>")
      .name("ViewAgendaSharp")
  }
}

export default ViewAgendaSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
