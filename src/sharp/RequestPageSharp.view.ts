import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class RequestPageSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 2H4.01L4 22h16V8l-6-6zm1 9h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2v2z\"/>")
      .name("RequestPageSharp")
  }
}

export default RequestPageSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
