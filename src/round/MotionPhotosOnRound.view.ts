import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MotionPhotosOnRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M4 9c.26.26.34.63.25.98a8.08 8.08 0 0 0 .1 4.38c.88 2.91 3.44 5.1 6.44 5.55 5.52.81 10.19-4.06 9.03-9.62-.65-3.13-3.23-5.61-6.37-6.16a8.169 8.169 0 0 0-3.46.13c-.35.09-.73 0-.98-.25-.56-.56-.28-1.49.47-1.69 1.47-.38 3.06-.44 4.7-.09 3.98.86 7.09 4.18 7.7 8.2 1.04 6.81-4.82 12.58-11.64 11.42-4.01-.69-7.26-3.86-8.04-7.85-.31-1.59-.24-3.12.12-4.53C2.52 8.72 3.45 8.45 4 9zm2 3c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6zm1-6.5C7 6.33 6.33 7 5.5 7S4 6.33 4 5.5 4.67 4 5.5 4 7 4.67 7 5.5z\"/>")
      .name("MotionPhotosOnRound")
  }
}

export default MotionPhotosOnRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>