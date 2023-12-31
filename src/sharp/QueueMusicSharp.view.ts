import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QueueMusicSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z\"/>")
      .name("QueueMusicSharp")
  }
}

export default QueueMusicSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
