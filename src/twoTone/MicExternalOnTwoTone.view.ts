import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MicExternalOnTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M6.81 16h.38l.6-6H6.21z\" opacity=\".3\"/><path d=\"M9.22 7c.48-.53.78-1.23.78-2 0-1.66-1.34-3-3-3S4 3.34 4 5c0 .77.3 1.47.78 2h4.44z\"/><path d=\"M16 2c-2.21 0-4 1.79-4 4v12c0 1.1-.9 2-2 2s-2-.9-2-2h1l1-10H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-1.1.9-2 2-2s2 .9 2 2v16h2V6c0-2.21-1.79-4-4-4zM7.19 16h-.38l-.6-6h1.58l-.6 6z\"/>")
      .name("MicExternalOnTwoTone")
  }
}

export default MicExternalOnTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
