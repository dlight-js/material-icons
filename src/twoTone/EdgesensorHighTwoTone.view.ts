import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EdgesensorHighTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M8 4h8v1H8zm0 15h8v1H8z\" opacity=\".3\"/><path d=\"M16 2.01 8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zm0-12H8V4h8v1zm3 5h2v7h-2zm3-3h2v7h-2zM3 7h2v7H3zm-3 3h2v7H0z\"/>")
      .name("EdgesensorHighTwoTone")
  }
}

export default EdgesensorHighTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
