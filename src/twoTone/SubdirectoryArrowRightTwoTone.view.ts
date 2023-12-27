import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SubdirectoryArrowRightTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z\"/>")
      .name("SubdirectoryArrowRightTwoTone")
  }
}

export default SubdirectoryArrowRightTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
