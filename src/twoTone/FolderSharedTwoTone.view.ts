import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FolderSharedTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m11.17 8-.59-.59L9.17 6H4v12h16V8h-8.83zM19 16v1h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm-4-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z\" opacity=\".3\"/><path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 3v1h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2z\"/>")
      .name("FolderSharedTwoTone")
  }
}

export default FolderSharedTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>