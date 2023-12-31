import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TaskSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4v20h16V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z\"/>")
      .name("TaskSharp")
  }
}

export default TaskSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
