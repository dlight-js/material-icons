import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LocalFloristSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 22a9 9 0 0 0 9-9 9 9 0 0 0-9 9zM5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 0 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9z\"/>")
      .name("LocalFloristSharp")
  }
}

export default LocalFloristSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
