import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TrendingFlatRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m21.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z\"/>")
      .name("TrendingFlatRound")
  }
}

export default TrendingFlatRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
