import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class HighQualityTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 6H5v12h14V6zm-8 9H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-3.5h2v3h-2z\" opacity=\".3\"/><path d=\"M3 6v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2zm2 0h14v12H5V6zm4.5 5.5h-2V9H6v6h1.5v-2h2v2H11V9H9.5zM17 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3z\"/>")
      .name("HighQualityTwoTone")
  }
}

export default HighQualityTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
