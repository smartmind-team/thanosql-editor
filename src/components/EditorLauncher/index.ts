import { memo, Ref, RefAttributes } from "react";

import EditorLauncher from "./EditorLauncher";
import type { EditorLauncherProps, EditorLauncherModule } from "./EditorLauncher";

export type { EditorLauncherProps };
export default memo<EditorLauncherProps & RefAttributes<EditorLauncherModule>>(EditorLauncher);
