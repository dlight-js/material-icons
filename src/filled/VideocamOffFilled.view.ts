import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class VideocamOffFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z\"/>")
      .name("VideocamOffFilled")
  }
}

export default VideocamOffFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
