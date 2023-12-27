import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoteTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 6H4v12.01h16V11h-5z\" opacity=\".3\"/><path d=\"M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z\"/>")
      .name("NoteTwoTone")
  }
}

export default NoteTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
