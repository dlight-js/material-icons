import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SubjectTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z\"/>")
      .name("SubjectTwoTone")
  }
}

export default SubjectTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
