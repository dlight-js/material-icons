import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class BadgeOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 12h4v1.5h-4zm0 3h4v1.5h-4z\"/><path d=\"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z\"/><circle cx=\"9\" cy=\"13.5\" r=\"1.5\"/><path d=\"M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z\"/>")
      .name("BadgeOutlined")
  }
}

export default BadgeOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
