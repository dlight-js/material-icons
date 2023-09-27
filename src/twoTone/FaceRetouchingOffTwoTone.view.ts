import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FaceRetouchingOffTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4zM4.42 9.47c.67-.38 1.28-.86 1.81-1.41l-.72-.72c-.46.65-.83 1.36-1.09 2.13z\" opacity=\".3\"/><path d=\"M9 14.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49A9.981 9.981 0 0 0 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zm-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88zm-8.77-.4 2.19 2.19A9.958 9.958 0 0 0 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31 1.89 3.72zm14.77 14.77A7.91 7.91 0 0 1 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.946 9.946 0 0 0 3.64-2.39l9.02 9.02zM5.51 7.34l.72.72c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13z\"/>")
      .name("FaceRetouchingOffTwoTone")
  }
}

export default FaceRetouchingOffTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
