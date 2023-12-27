import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewKanbanSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3H3v18h18V3zM9 17H7V7h2v10zm4-5h-2V7h2v5zm4 3h-2V7h2v8z\"/>")
      .name("ViewKanbanSharp")
  }
}

export default ViewKanbanSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
