import { memo, RefAttributes } from "react";

import EditorLauncher, { type EditorLauncherProps, type EditorLauncherModule } from "./EditorLauncher";
export default memo<EditorLauncherProps & RefAttributes<EditorLauncherModule>>(EditorLauncher);
export type { EditorLauncherProps, EditorLauncherModule };
