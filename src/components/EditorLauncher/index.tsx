import { memo } from "react";

import EditorLauncher from "./EditorLauncher";
import type { EditorLauncherProps } from "./EditorLauncher";

export type { EditorLauncherProps };
export default memo<EditorLauncherProps>(EditorLauncher);
