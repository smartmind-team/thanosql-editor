// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from "antlr4";
import thanosParserListener from "./thanosParserListener.js";
const serializedATN = [
  4, 1, 49, 353, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10,
  2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21,
  7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31,
  2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1,
  86, 8, 1, 10, 1, 12, 1, 89, 9, 1, 1, 2, 1, 2, 3, 2, 93, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 102, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1,
  4, 1, 4, 1, 4, 1, 4, 3, 4, 112, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 119, 8, 5, 10, 5, 12, 5, 122, 9, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1,
  6, 1, 6, 3, 6, 132, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 140, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 146, 8, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1,
  9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 159, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 165, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 171,
  8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 183, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 189, 8, 14, 1,
  15, 1, 15, 1, 15, 1, 15, 3, 15, 195, 8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 201, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 207, 8, 17, 1, 18, 1,
  18, 1, 18, 1, 18, 3, 18, 213, 8, 18, 1, 19, 1, 19, 1, 19, 3, 19, 218, 8, 19, 1, 19, 1, 19, 3, 19, 222, 8, 19, 1, 19, 1, 19, 1, 19, 3, 19, 227, 8,
  19, 1, 19, 1, 19, 3, 19, 231, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 239, 8, 20, 1, 21, 1, 21, 3, 21, 243, 8, 21, 1, 21, 1, 21, 3,
  21, 247, 8, 21, 1, 22, 1, 22, 3, 22, 251, 8, 22, 1, 22, 1, 22, 3, 22, 255, 8, 22, 1, 23, 1, 23, 3, 23, 259, 8, 23, 1, 23, 1, 23, 3, 23, 263, 8, 23,
  1, 24, 1, 24, 1, 24, 3, 24, 268, 8, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 281, 8, 25, 1, 26, 1,
  26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 297, 8, 30, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 303,
  8, 31, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 309, 8, 32, 1, 33, 1, 33, 1, 33, 3, 33, 314, 8, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1,
  34, 1, 34, 5, 34, 325, 8, 34, 10, 34, 12, 34, 328, 9, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 336, 8, 35, 1, 36, 1, 36, 1, 37, 5, 37,
  341, 8, 37, 10, 37, 12, 37, 344, 9, 37, 1, 38, 1, 38, 1, 38, 3, 38, 349, 8, 38, 1, 38, 1, 38, 1, 38, 1, 342, 0, 39, 0, 2, 4, 6, 8, 10, 12, 14, 16,
  18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 0, 0, 368, 0, 78, 1, 0, 0,
  0, 2, 81, 1, 0, 0, 0, 4, 92, 1, 0, 0, 0, 6, 101, 1, 0, 0, 0, 8, 111, 1, 0, 0, 0, 10, 113, 1, 0, 0, 0, 12, 125, 1, 0, 0, 0, 14, 133, 1, 0, 0, 0, 16,
  141, 1, 0, 0, 0, 18, 150, 1, 0, 0, 0, 20, 154, 1, 0, 0, 0, 22, 160, 1, 0, 0, 0, 24, 166, 1, 0, 0, 0, 26, 182, 1, 0, 0, 0, 28, 184, 1, 0, 0, 0, 30,
  190, 1, 0, 0, 0, 32, 196, 1, 0, 0, 0, 34, 202, 1, 0, 0, 0, 36, 208, 1, 0, 0, 0, 38, 230, 1, 0, 0, 0, 40, 238, 1, 0, 0, 0, 42, 240, 1, 0, 0, 0, 44,
  248, 1, 0, 0, 0, 46, 256, 1, 0, 0, 0, 48, 264, 1, 0, 0, 0, 50, 280, 1, 0, 0, 0, 52, 282, 1, 0, 0, 0, 54, 284, 1, 0, 0, 0, 56, 286, 1, 0, 0, 0, 58,
  289, 1, 0, 0, 0, 60, 296, 1, 0, 0, 0, 62, 298, 1, 0, 0, 0, 64, 304, 1, 0, 0, 0, 66, 310, 1, 0, 0, 0, 68, 315, 1, 0, 0, 0, 70, 335, 1, 0, 0, 0, 72,
  337, 1, 0, 0, 0, 74, 342, 1, 0, 0, 0, 76, 345, 1, 0, 0, 0, 78, 79, 3, 2, 1, 0, 79, 80, 5, 0, 0, 1, 80, 1, 1, 0, 0, 0, 81, 87, 3, 72, 36, 0, 82, 83,
  3, 4, 2, 0, 83, 84, 3, 72, 36, 0, 84, 86, 1, 0, 0, 0, 85, 82, 1, 0, 0, 0, 86, 89, 1, 0, 0, 0, 87, 85, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 3, 1, 0,
  0, 0, 89, 87, 1, 0, 0, 0, 90, 93, 3, 6, 3, 0, 91, 93, 3, 8, 4, 0, 92, 90, 1, 0, 0, 0, 92, 91, 1, 0, 0, 0, 93, 5, 1, 0, 0, 0, 94, 102, 3, 12, 6, 0,
  95, 102, 3, 14, 7, 0, 96, 102, 3, 16, 8, 0, 97, 102, 3, 18, 9, 0, 98, 102, 3, 40, 20, 0, 99, 102, 3, 48, 24, 0, 100, 102, 3, 60, 30, 0, 101, 94, 1,
  0, 0, 0, 101, 95, 1, 0, 0, 0, 101, 96, 1, 0, 0, 0, 101, 97, 1, 0, 0, 0, 101, 98, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 101, 100, 1, 0, 0, 0, 102, 7, 1,
  0, 0, 0, 103, 112, 3, 20, 10, 0, 104, 112, 3, 22, 11, 0, 105, 112, 3, 24, 12, 0, 106, 112, 3, 26, 13, 0, 107, 112, 3, 38, 19, 0, 108, 112, 3, 50,
  25, 0, 109, 112, 3, 70, 35, 0, 110, 112, 3, 76, 38, 0, 111, 103, 1, 0, 0, 0, 111, 104, 1, 0, 0, 0, 111, 105, 1, 0, 0, 0, 111, 106, 1, 0, 0, 0, 111,
  107, 1, 0, 0, 0, 111, 108, 1, 0, 0, 0, 111, 109, 1, 0, 0, 0, 111, 110, 1, 0, 0, 0, 112, 9, 1, 0, 0, 0, 113, 114, 5, 37, 0, 0, 114, 120, 3, 72, 36,
  0, 115, 116, 3, 8, 4, 0, 116, 117, 3, 72, 36, 0, 117, 119, 1, 0, 0, 0, 118, 115, 1, 0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121,
  1, 0, 0, 0, 121, 123, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 124, 5, 38, 0, 0, 124, 11, 1, 0, 0, 0, 125, 126, 5, 2, 0, 0, 126, 127, 5, 1, 0, 0, 127,
  128, 5, 30, 0, 0, 128, 129, 3, 66, 33, 0, 129, 131, 5, 21, 0, 0, 130, 132, 3, 10, 5, 0, 131, 130, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0, 132, 13, 1, 0,
  0, 0, 133, 134, 5, 3, 0, 0, 134, 135, 5, 1, 0, 0, 135, 136, 5, 30, 0, 0, 136, 137, 3, 66, 33, 0, 137, 139, 5, 21, 0, 0, 138, 140, 3, 10, 5, 0, 139,
  138, 1, 0, 0, 0, 139, 140, 1, 0, 0, 0, 140, 15, 1, 0, 0, 0, 141, 142, 5, 4, 0, 0, 142, 143, 5, 1, 0, 0, 143, 145, 5, 30, 0, 0, 144, 146, 3, 68, 34,
  0, 145, 144, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 147, 1, 0, 0, 0, 147, 148, 5, 29, 0, 0, 148, 149, 5, 30, 0, 0, 149, 17, 1, 0, 0, 0, 150, 151, 5,
  5, 0, 0, 151, 152, 5, 1, 0, 0, 152, 153, 5, 30, 0, 0, 153, 19, 1, 0, 0, 0, 154, 155, 5, 7, 0, 0, 155, 156, 3, 66, 33, 0, 156, 158, 5, 21, 0, 0, 157,
  159, 3, 10, 5, 0, 158, 157, 1, 0, 0, 0, 158, 159, 1, 0, 0, 0, 159, 21, 1, 0, 0, 0, 160, 161, 5, 8, 0, 0, 161, 162, 3, 66, 33, 0, 162, 164, 5, 21, 0,
  0, 163, 165, 3, 10, 5, 0, 164, 163, 1, 0, 0, 0, 164, 165, 1, 0, 0, 0, 165, 23, 1, 0, 0, 0, 166, 167, 5, 9, 0, 0, 167, 168, 3, 66, 33, 0, 168, 170,
  5, 21, 0, 0, 169, 171, 3, 10, 5, 0, 170, 169, 1, 0, 0, 0, 170, 171, 1, 0, 0, 0, 171, 25, 1, 0, 0, 0, 172, 173, 5, 10, 0, 0, 173, 183, 3, 28, 14, 0,
  174, 175, 5, 10, 0, 0, 175, 183, 3, 30, 15, 0, 176, 177, 5, 10, 0, 0, 177, 183, 3, 32, 16, 0, 178, 179, 5, 10, 0, 0, 179, 183, 3, 34, 17, 0, 180,
  181, 5, 10, 0, 0, 181, 183, 3, 36, 18, 0, 182, 172, 1, 0, 0, 0, 182, 174, 1, 0, 0, 0, 182, 176, 1, 0, 0, 0, 182, 178, 1, 0, 0, 0, 182, 180, 1, 0, 0,
  0, 183, 27, 1, 0, 0, 0, 184, 185, 5, 23, 0, 0, 185, 186, 3, 66, 33, 0, 186, 188, 5, 21, 0, 0, 187, 189, 3, 10, 5, 0, 188, 187, 1, 0, 0, 0, 188, 189,
  1, 0, 0, 0, 189, 29, 1, 0, 0, 0, 190, 191, 5, 24, 0, 0, 191, 192, 3, 66, 33, 0, 192, 194, 5, 21, 0, 0, 193, 195, 3, 10, 5, 0, 194, 193, 1, 0, 0, 0,
  194, 195, 1, 0, 0, 0, 195, 31, 1, 0, 0, 0, 196, 197, 5, 25, 0, 0, 197, 198, 3, 66, 33, 0, 198, 200, 5, 21, 0, 0, 199, 201, 3, 10, 5, 0, 200, 199, 1,
  0, 0, 0, 200, 201, 1, 0, 0, 0, 201, 33, 1, 0, 0, 0, 202, 203, 5, 26, 0, 0, 203, 204, 3, 66, 33, 0, 204, 206, 5, 21, 0, 0, 205, 207, 3, 10, 5, 0,
  206, 205, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 35, 1, 0, 0, 0, 208, 209, 5, 27, 0, 0, 209, 210, 3, 66, 33, 0, 210, 212, 5, 21, 0, 0, 211, 213, 3,
  10, 5, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 37, 1, 0, 0, 0, 214, 215, 5, 11, 0, 0, 215, 217, 5, 30, 0, 0, 216, 218, 3, 68, 34, 0,
  217, 216, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 219, 1, 0, 0, 0, 219, 221, 5, 21, 0, 0, 220, 222, 3, 10, 5, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1,
  0, 0, 0, 222, 231, 1, 0, 0, 0, 223, 224, 5, 11, 0, 0, 224, 226, 5, 30, 0, 0, 225, 227, 3, 68, 34, 0, 226, 225, 1, 0, 0, 0, 226, 227, 1, 0, 0, 0,
  227, 228, 1, 0, 0, 0, 228, 229, 5, 29, 0, 0, 229, 231, 5, 30, 0, 0, 230, 214, 1, 0, 0, 0, 230, 223, 1, 0, 0, 0, 231, 39, 1, 0, 0, 0, 232, 233, 5,
  12, 0, 0, 233, 239, 3, 42, 21, 0, 234, 235, 5, 12, 0, 0, 235, 239, 3, 44, 22, 0, 236, 237, 5, 12, 0, 0, 237, 239, 3, 46, 23, 0, 238, 232, 1, 0, 0,
  0, 238, 234, 1, 0, 0, 0, 238, 236, 1, 0, 0, 0, 239, 41, 1, 0, 0, 0, 240, 242, 5, 23, 0, 0, 241, 243, 3, 68, 34, 0, 242, 241, 1, 0, 0, 0, 242, 243,
  1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244, 246, 5, 21, 0, 0, 245, 247, 3, 10, 5, 0, 246, 245, 1, 0, 0, 0, 246, 247, 1, 0, 0, 0, 247, 43, 1, 0, 0, 0,
  248, 250, 5, 24, 0, 0, 249, 251, 3, 68, 34, 0, 250, 249, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252, 254, 5, 21, 0, 0, 253, 255, 3,
  10, 5, 0, 254, 253, 1, 0, 0, 0, 254, 255, 1, 0, 0, 0, 255, 45, 1, 0, 0, 0, 256, 258, 5, 25, 0, 0, 257, 259, 3, 68, 34, 0, 258, 257, 1, 0, 0, 0, 258,
  259, 1, 0, 0, 0, 259, 260, 1, 0, 0, 0, 260, 262, 5, 21, 0, 0, 261, 263, 3, 10, 5, 0, 262, 261, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 47, 1, 0, 0,
  0, 264, 265, 5, 13, 0, 0, 265, 267, 5, 30, 0, 0, 266, 268, 3, 68, 34, 0, 267, 266, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 269, 1, 0, 0, 0, 269, 270,
  5, 29, 0, 0, 270, 271, 5, 30, 0, 0, 271, 49, 1, 0, 0, 0, 272, 273, 5, 14, 0, 0, 273, 281, 3, 52, 26, 0, 274, 275, 5, 14, 0, 0, 275, 281, 3, 54, 27,
  0, 276, 277, 5, 14, 0, 0, 277, 281, 3, 56, 28, 0, 278, 279, 5, 14, 0, 0, 279, 281, 3, 58, 29, 0, 280, 272, 1, 0, 0, 0, 280, 274, 1, 0, 0, 0, 280,
  276, 1, 0, 0, 0, 280, 278, 1, 0, 0, 0, 281, 51, 1, 0, 0, 0, 282, 283, 5, 15, 0, 0, 283, 53, 1, 0, 0, 0, 284, 285, 5, 1, 0, 0, 285, 55, 1, 0, 0, 0,
  286, 287, 5, 16, 0, 0, 287, 288, 5, 1, 0, 0, 288, 57, 1, 0, 0, 0, 289, 290, 5, 16, 0, 0, 290, 291, 5, 17, 0, 0, 291, 59, 1, 0, 0, 0, 292, 293, 5,
  18, 0, 0, 293, 297, 3, 62, 31, 0, 294, 295, 5, 18, 0, 0, 295, 297, 3, 64, 32, 0, 296, 292, 1, 0, 0, 0, 296, 294, 1, 0, 0, 0, 297, 61, 1, 0, 0, 0,
  298, 299, 5, 16, 0, 0, 299, 300, 5, 1, 0, 0, 300, 302, 5, 30, 0, 0, 301, 303, 3, 68, 34, 0, 302, 301, 1, 0, 0, 0, 302, 303, 1, 0, 0, 0, 303, 63, 1,
  0, 0, 0, 304, 305, 5, 16, 0, 0, 305, 306, 5, 17, 0, 0, 306, 308, 5, 30, 0, 0, 307, 309, 3, 68, 34, 0, 308, 307, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0,
  309, 65, 1, 0, 0, 0, 310, 311, 5, 19, 0, 0, 311, 313, 5, 30, 0, 0, 312, 314, 3, 68, 34, 0, 313, 312, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 67, 1,
  0, 0, 0, 315, 316, 5, 20, 0, 0, 316, 317, 5, 37, 0, 0, 317, 318, 5, 30, 0, 0, 318, 319, 5, 36, 0, 0, 319, 326, 5, 30, 0, 0, 320, 321, 5, 35, 0, 0,
  321, 322, 5, 30, 0, 0, 322, 323, 5, 36, 0, 0, 323, 325, 5, 30, 0, 0, 324, 320, 1, 0, 0, 0, 325, 328, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 326, 327, 1,
  0, 0, 0, 327, 329, 1, 0, 0, 0, 328, 326, 1, 0, 0, 0, 329, 330, 5, 38, 0, 0, 330, 69, 1, 0, 0, 0, 331, 332, 5, 29, 0, 0, 332, 336, 3, 10, 5, 0, 333,
  334, 5, 28, 0, 0, 334, 336, 3, 10, 5, 0, 335, 331, 1, 0, 0, 0, 335, 333, 1, 0, 0, 0, 336, 71, 1, 0, 0, 0, 337, 338, 3, 74, 37, 0, 338, 73, 1, 0, 0,
  0, 339, 341, 9, 0, 0, 0, 340, 339, 1, 0, 0, 0, 341, 344, 1, 0, 0, 0, 342, 343, 1, 0, 0, 0, 342, 340, 1, 0, 0, 0, 343, 75, 1, 0, 0, 0, 344, 342, 1,
  0, 0, 0, 345, 346, 5, 37, 0, 0, 346, 348, 3, 74, 37, 0, 347, 349, 3, 76, 38, 0, 348, 347, 1, 0, 0, 0, 348, 349, 1, 0, 0, 0, 349, 350, 1, 0, 0, 0,
  350, 351, 5, 38, 0, 0, 351, 77, 1, 0, 0, 0, 38, 87, 92, 101, 111, 120, 131, 139, 145, 158, 164, 170, 182, 188, 194, 200, 206, 212, 217, 221, 226,
  230, 238, 242, 246, 250, 254, 258, 262, 267, 280, 296, 302, 308, 313, 326, 335, 342, 348,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class thanosParser extends antlr4.Parser {
  static grammarFileName = "java-escape";
  static literalNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "':'",
    "';'",
    "','",
    "'='",
    "'('",
    "')'",
    "'['",
    "']'",
    "'/'",
    "'*'",
    "'.'",
    "'<'",
    "'>'",
    "'-'",
  ];
  static symbolicNames = [
    null,
    "MODEL",
    "BUILD",
    "FIT",
    "UPLOAD",
    "DELETE",
    "TRANSFORM",
    "PREDICT",
    "EVALUATE",
    "CONVERT",
    "SEARCH",
    "FUNCTION",
    "PRINT",
    "COPY",
    "LIST",
    "TABLE",
    "THANOSQL",
    "DATASET",
    "GET",
    "USING",
    "OPTIONS",
    "AS",
    "BY",
    "IMAGE",
    "AUDIO",
    "VIDEO",
    "KEYWORD",
    "TEXT",
    "JOIN",
    "FROM",
    "IDENTIFIER",
    "NAME",
    "OPERATOR_SPECIAL",
    "COLON",
    "SEMI_COLON",
    "COMMA",
    "EQUAL",
    "LEFT_PAREN",
    "RIGHT_PAREN",
    "LEFT_SQURE",
    "RIGHT_SQURE",
    "DIVIDE",
    "MULTIPLY",
    "DOT",
    "LT",
    "GT",
    "MINUS",
    "SIMPLE_COMMENT",
    "BRACKETED_COMMENT",
    "WS",
  ];
  static ruleNames = [
    "thanosLanguage",
    "thanosQuery",
    "thanosStmt",
    "thanosNoSubqueryStmt",
    "thanosSubqueryStmt",
    "thanosSubquery",
    "thanosBuildModelStmt",
    "thanosFitModelStmt",
    "thanosUploadModelStmt",
    "thanosDeleteModelStmt",
    "thanosPredictStmt",
    "thanosEvaluateStmt",
    "thanosConvertStmt",
    "thanosSearchStmt",
    "thanosSearchImageStmt",
    "thanosSearchAudioStmt",
    "thanosSearchVideoStmt",
    "thanosSearchKeywordStmt",
    "thanosSearchTextStmt",
    "thanosFunctionStmt",
    "thanosPrintStmt",
    "thanosPrintImageStmt",
    "thanosPrintAudioStmt",
    "thanosPrintVideoStmt",
    "thanosCopyStmt",
    "thanosListStmt",
    "thanosListTableStmt",
    "thanosListModelStmt",
    "thanosListThanoSQLModelStmt",
    "thanosListThanoSQLDatasetStmt",
    "thanosGetStmt",
    "thanosGetThanoSQLModelStmt",
    "thanosGetThanoSQLDatasetStmt",
    "thanosUsingStmt",
    "thanosOptionStmt",
    "normalSubquery",
    "normalStmt",
    "remaining",
    "normalParenException",
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = thanosParser.ruleNames;
    this.literalNames = thanosParser.literalNames;
    this.symbolicNames = thanosParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  thanosLanguage() {
    let localctx = new ThanosLanguageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, thanosParser.RULE_thanosLanguage);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 78;
      this.thanosQuery();
      this.state = 79;
      this.match(thanosParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosQuery() {
    let localctx = new ThanosQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, thanosParser.RULE_thanosQuery);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 81;
      this.normalStmt();
      this.state = 87;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (((_la & ~0x1f) == 0 && ((1 << _la) & 805601212) !== 0) || _la === 37) {
        this.state = 82;
        this.thanosStmt();
        this.state = 83;
        this.normalStmt();
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosStmt() {
    let localctx = new ThanosStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, thanosParser.RULE_thanosStmt);
    try {
      this.state = 92;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 12:
        case 13:
        case 18:
          this.enterOuterAlt(localctx, 1);
          this.state = 90;
          this.thanosNoSubqueryStmt();
          break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 14:
        case 28:
        case 29:
        case 37:
          this.enterOuterAlt(localctx, 2);
          this.state = 91;
          this.thanosSubqueryStmt();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosNoSubqueryStmt() {
    let localctx = new ThanosNoSubqueryStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, thanosParser.RULE_thanosNoSubqueryStmt);
    try {
      this.state = 101;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 2:
          this.enterOuterAlt(localctx, 1);
          this.state = 94;
          this.thanosBuildModelStmt();
          break;
        case 3:
          this.enterOuterAlt(localctx, 2);
          this.state = 95;
          this.thanosFitModelStmt();
          break;
        case 4:
          this.enterOuterAlt(localctx, 3);
          this.state = 96;
          this.thanosUploadModelStmt();
          break;
        case 5:
          this.enterOuterAlt(localctx, 4);
          this.state = 97;
          this.thanosDeleteModelStmt();
          break;
        case 12:
          this.enterOuterAlt(localctx, 5);
          this.state = 98;
          this.thanosPrintStmt();
          break;
        case 13:
          this.enterOuterAlt(localctx, 6);
          this.state = 99;
          this.thanosCopyStmt();
          break;
        case 18:
          this.enterOuterAlt(localctx, 7);
          this.state = 100;
          this.thanosGetStmt();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSubqueryStmt() {
    let localctx = new ThanosSubqueryStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, thanosParser.RULE_thanosSubqueryStmt);
    try {
      this.state = 111;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 7:
          this.enterOuterAlt(localctx, 1);
          this.state = 103;
          this.thanosPredictStmt();
          break;
        case 8:
          this.enterOuterAlt(localctx, 2);
          this.state = 104;
          this.thanosEvaluateStmt();
          break;
        case 9:
          this.enterOuterAlt(localctx, 3);
          this.state = 105;
          this.thanosConvertStmt();
          break;
        case 10:
          this.enterOuterAlt(localctx, 4);
          this.state = 106;
          this.thanosSearchStmt();
          break;
        case 11:
          this.enterOuterAlt(localctx, 5);
          this.state = 107;
          this.thanosFunctionStmt();
          break;
        case 14:
          this.enterOuterAlt(localctx, 6);
          this.state = 108;
          this.thanosListStmt();
          break;
        case 28:
        case 29:
          this.enterOuterAlt(localctx, 7);
          this.state = 109;
          this.normalSubquery();
          break;
        case 37:
          this.enterOuterAlt(localctx, 8);
          this.state = 110;
          this.normalParenException();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSubquery() {
    let localctx = new ThanosSubqueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, thanosParser.RULE_thanosSubquery);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 113;
      this.match(thanosParser.LEFT_PAREN);
      this.state = 114;
      this.normalStmt();
      this.state = 120;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (((_la - 7) & ~0x1f) == 0 && ((1 << (_la - 7)) & 1080033439) !== 0) {
        this.state = 115;
        this.thanosSubqueryStmt();
        this.state = 116;
        this.normalStmt();
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 123;
      this.match(thanosParser.RIGHT_PAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosBuildModelStmt() {
    let localctx = new ThanosBuildModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, thanosParser.RULE_thanosBuildModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 125;
      this.match(thanosParser.BUILD);
      this.state = 126;
      this.match(thanosParser.MODEL);
      this.state = 127;
      localctx.user_model_name = this.match(thanosParser.IDENTIFIER);
      this.state = 128;
      this.thanosUsingStmt();
      this.state = 129;
      this.match(thanosParser.AS);
      this.state = 131;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);
      if (la_ === 1) {
        this.state = 130;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosFitModelStmt() {
    let localctx = new ThanosFitModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, thanosParser.RULE_thanosFitModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 133;
      this.match(thanosParser.FIT);
      this.state = 134;
      this.match(thanosParser.MODEL);
      this.state = 135;
      localctx.user_model_name = this.match(thanosParser.IDENTIFIER);
      this.state = 136;
      this.thanosUsingStmt();
      this.state = 137;
      this.match(thanosParser.AS);
      this.state = 139;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);
      if (la_ === 1) {
        this.state = 138;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosUploadModelStmt() {
    let localctx = new ThanosUploadModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, thanosParser.RULE_thanosUploadModelStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 141;
      this.match(thanosParser.UPLOAD);
      this.state = 142;
      this.match(thanosParser.MODEL);
      this.state = 143;
      localctx.user_model_name = this.match(thanosParser.IDENTIFIER);
      this.state = 145;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 144;
        this.thanosOptionStmt();
      }

      this.state = 147;
      this.match(thanosParser.FROM);
      this.state = 148;
      localctx.path = this.match(thanosParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosDeleteModelStmt() {
    let localctx = new ThanosDeleteModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, thanosParser.RULE_thanosDeleteModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 150;
      this.match(thanosParser.DELETE);
      this.state = 151;
      this.match(thanosParser.MODEL);
      this.state = 152;
      localctx.built_model_name = this.match(thanosParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosPredictStmt() {
    let localctx = new ThanosPredictStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, thanosParser.RULE_thanosPredictStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 154;
      this.match(thanosParser.PREDICT);
      this.state = 155;
      this.thanosUsingStmt();
      this.state = 156;
      this.match(thanosParser.AS);
      this.state = 158;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
      if (la_ === 1) {
        this.state = 157;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosEvaluateStmt() {
    let localctx = new ThanosEvaluateStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, thanosParser.RULE_thanosEvaluateStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 160;
      this.match(thanosParser.EVALUATE);
      this.state = 161;
      this.thanosUsingStmt();
      this.state = 162;
      this.match(thanosParser.AS);
      this.state = 164;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
      if (la_ === 1) {
        this.state = 163;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosConvertStmt() {
    let localctx = new ThanosConvertStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, thanosParser.RULE_thanosConvertStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 166;
      this.match(thanosParser.CONVERT);
      this.state = 167;
      this.thanosUsingStmt();
      this.state = 168;
      this.match(thanosParser.AS);
      this.state = 170;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
      if (la_ === 1) {
        this.state = 169;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchStmt() {
    let localctx = new ThanosSearchStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, thanosParser.RULE_thanosSearchStmt);
    try {
      this.state = 182;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 11, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 172;
          this.match(thanosParser.SEARCH);
          this.state = 173;
          this.thanosSearchImageStmt();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 174;
          this.match(thanosParser.SEARCH);
          this.state = 175;
          this.thanosSearchAudioStmt();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 176;
          this.match(thanosParser.SEARCH);
          this.state = 177;
          this.thanosSearchVideoStmt();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 178;
          this.match(thanosParser.SEARCH);
          this.state = 179;
          this.thanosSearchKeywordStmt();
          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 180;
          this.match(thanosParser.SEARCH);
          this.state = 181;
          this.thanosSearchTextStmt();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchImageStmt() {
    let localctx = new ThanosSearchImageStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, thanosParser.RULE_thanosSearchImageStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 184;
      this.match(thanosParser.IMAGE);
      this.state = 185;
      this.thanosUsingStmt();
      this.state = 186;
      this.match(thanosParser.AS);
      this.state = 188;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
      if (la_ === 1) {
        this.state = 187;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchAudioStmt() {
    let localctx = new ThanosSearchAudioStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, thanosParser.RULE_thanosSearchAudioStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 190;
      this.match(thanosParser.AUDIO);
      this.state = 191;
      this.thanosUsingStmt();
      this.state = 192;
      this.match(thanosParser.AS);
      this.state = 194;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
      if (la_ === 1) {
        this.state = 193;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchVideoStmt() {
    let localctx = new ThanosSearchVideoStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, thanosParser.RULE_thanosSearchVideoStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 196;
      this.match(thanosParser.VIDEO);
      this.state = 197;
      this.thanosUsingStmt();
      this.state = 198;
      this.match(thanosParser.AS);
      this.state = 200;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
      if (la_ === 1) {
        this.state = 199;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchKeywordStmt() {
    let localctx = new ThanosSearchKeywordStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, thanosParser.RULE_thanosSearchKeywordStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 202;
      this.match(thanosParser.KEYWORD);
      this.state = 203;
      this.thanosUsingStmt();
      this.state = 204;
      this.match(thanosParser.AS);
      this.state = 206;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
      if (la_ === 1) {
        this.state = 205;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosSearchTextStmt() {
    let localctx = new ThanosSearchTextStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, thanosParser.RULE_thanosSearchTextStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 208;
      this.match(thanosParser.TEXT);
      this.state = 209;
      this.thanosUsingStmt();
      this.state = 210;
      this.match(thanosParser.AS);
      this.state = 212;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
      if (la_ === 1) {
        this.state = 211;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosFunctionStmt() {
    let localctx = new ThanosFunctionStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, thanosParser.RULE_thanosFunctionStmt);
    var _la = 0; // Token type
    try {
      this.state = 230;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 20, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 214;
          this.match(thanosParser.FUNCTION);
          this.state = 215;
          localctx.built_function_name = this.match(thanosParser.IDENTIFIER);
          this.state = 217;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 20) {
            this.state = 216;
            this.thanosOptionStmt();
          }

          this.state = 219;
          this.match(thanosParser.AS);
          this.state = 221;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
          if (la_ === 1) {
            this.state = 220;
            this.thanosSubquery();
          }
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 223;
          this.match(thanosParser.FUNCTION);
          this.state = 224;
          localctx.built_function_name = this.match(thanosParser.IDENTIFIER);
          this.state = 226;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === 20) {
            this.state = 225;
            this.thanosOptionStmt();
          }

          this.state = 228;
          this.match(thanosParser.FROM);
          this.state = 229;
          localctx.input_data = this.match(thanosParser.IDENTIFIER);
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosPrintStmt() {
    let localctx = new ThanosPrintStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, thanosParser.RULE_thanosPrintStmt);
    try {
      this.state = 238;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 21, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 232;
          this.match(thanosParser.PRINT);
          this.state = 233;
          this.thanosPrintImageStmt();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 234;
          this.match(thanosParser.PRINT);
          this.state = 235;
          this.thanosPrintAudioStmt();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 236;
          this.match(thanosParser.PRINT);
          this.state = 237;
          this.thanosPrintVideoStmt();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosPrintImageStmt() {
    let localctx = new ThanosPrintImageStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, thanosParser.RULE_thanosPrintImageStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 240;
      this.match(thanosParser.IMAGE);
      this.state = 242;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 241;
        this.thanosOptionStmt();
      }

      this.state = 244;
      this.match(thanosParser.AS);
      this.state = 246;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
      if (la_ === 1) {
        this.state = 245;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosPrintAudioStmt() {
    let localctx = new ThanosPrintAudioStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, thanosParser.RULE_thanosPrintAudioStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 248;
      this.match(thanosParser.AUDIO);
      this.state = 250;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 249;
        this.thanosOptionStmt();
      }

      this.state = 252;
      this.match(thanosParser.AS);
      this.state = 254;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
      if (la_ === 1) {
        this.state = 253;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosPrintVideoStmt() {
    let localctx = new ThanosPrintVideoStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, thanosParser.RULE_thanosPrintVideoStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 256;
      this.match(thanosParser.VIDEO);
      this.state = 258;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 257;
        this.thanosOptionStmt();
      }

      this.state = 260;
      this.match(thanosParser.AS);
      this.state = 262;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 27, this._ctx);
      if (la_ === 1) {
        this.state = 261;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosCopyStmt() {
    let localctx = new ThanosCopyStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, thanosParser.RULE_thanosCopyStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 264;
      this.match(thanosParser.COPY);
      this.state = 265;
      localctx.user_table_name = this.match(thanosParser.IDENTIFIER);
      this.state = 267;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 266;
        this.thanosOptionStmt();
      }

      this.state = 269;
      this.match(thanosParser.FROM);
      this.state = 270;
      localctx.input_data = this.match(thanosParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosListStmt() {
    let localctx = new ThanosListStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, thanosParser.RULE_thanosListStmt);
    try {
      this.state = 280;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 29, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 272;
          this.match(thanosParser.LIST);
          this.state = 273;
          this.thanosListTableStmt();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 274;
          this.match(thanosParser.LIST);
          this.state = 275;
          this.thanosListModelStmt();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 276;
          this.match(thanosParser.LIST);
          this.state = 277;
          this.thanosListThanoSQLModelStmt();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 278;
          this.match(thanosParser.LIST);
          this.state = 279;
          this.thanosListThanoSQLDatasetStmt();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosListTableStmt() {
    let localctx = new ThanosListTableStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, thanosParser.RULE_thanosListTableStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 282;
      this.match(thanosParser.TABLE);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosListModelStmt() {
    let localctx = new ThanosListModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, thanosParser.RULE_thanosListModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 284;
      this.match(thanosParser.MODEL);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosListThanoSQLModelStmt() {
    let localctx = new ThanosListThanoSQLModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, thanosParser.RULE_thanosListThanoSQLModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 286;
      this.match(thanosParser.THANOSQL);
      this.state = 287;
      this.match(thanosParser.MODEL);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosListThanoSQLDatasetStmt() {
    let localctx = new ThanosListThanoSQLDatasetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, thanosParser.RULE_thanosListThanoSQLDatasetStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 289;
      this.match(thanosParser.THANOSQL);
      this.state = 290;
      this.match(thanosParser.DATASET);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosGetStmt() {
    let localctx = new ThanosGetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, thanosParser.RULE_thanosGetStmt);
    try {
      this.state = 296;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 30, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 292;
          this.match(thanosParser.GET);
          this.state = 293;
          this.thanosGetThanoSQLModelStmt();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 294;
          this.match(thanosParser.GET);
          this.state = 295;
          this.thanosGetThanoSQLDatasetStmt();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosGetThanoSQLModelStmt() {
    let localctx = new ThanosGetThanoSQLModelStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, thanosParser.RULE_thanosGetThanoSQLModelStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 298;
      this.match(thanosParser.THANOSQL);
      this.state = 299;
      this.match(thanosParser.MODEL);
      this.state = 300;
      localctx.built_model_name = this.match(thanosParser.IDENTIFIER);
      this.state = 302;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 31, this._ctx);
      if (la_ === 1) {
        this.state = 301;
        this.thanosOptionStmt();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosGetThanoSQLDatasetStmt() {
    let localctx = new ThanosGetThanoSQLDatasetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, thanosParser.RULE_thanosGetThanoSQLDatasetStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 304;
      this.match(thanosParser.THANOSQL);
      this.state = 305;
      this.match(thanosParser.DATASET);
      this.state = 306;
      localctx.dataset_name = this.match(thanosParser.IDENTIFIER);
      this.state = 308;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 32, this._ctx);
      if (la_ === 1) {
        this.state = 307;
        this.thanosOptionStmt();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosUsingStmt() {
    let localctx = new ThanosUsingStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, thanosParser.RULE_thanosUsingStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 310;
      this.match(thanosParser.USING);
      this.state = 311;
      localctx.built_model_name = this.match(thanosParser.IDENTIFIER);
      this.state = 313;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 20) {
        this.state = 312;
        this.thanosOptionStmt();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  thanosOptionStmt() {
    let localctx = new ThanosOptionStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, thanosParser.RULE_thanosOptionStmt);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 315;
      this.match(thanosParser.OPTIONS);
      this.state = 316;
      this.match(thanosParser.LEFT_PAREN);
      this.state = 317;
      localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
      localctx.paramsKey.push(localctx._IDENTIFIER);
      this.state = 318;
      this.match(thanosParser.EQUAL);
      this.state = 319;
      localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
      localctx.paramsValue.push(localctx._IDENTIFIER);
      this.state = 326;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 35) {
        this.state = 320;
        this.match(thanosParser.COMMA);
        this.state = 321;
        localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
        localctx.paramsKey.push(localctx._IDENTIFIER);
        this.state = 322;
        this.match(thanosParser.EQUAL);
        this.state = 323;
        localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
        localctx.paramsValue.push(localctx._IDENTIFIER);
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 329;
      this.match(thanosParser.RIGHT_PAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  normalSubquery() {
    let localctx = new NormalSubqueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, thanosParser.RULE_normalSubquery);
    try {
      this.state = 335;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 29:
          this.enterOuterAlt(localctx, 1);
          this.state = 331;
          this.match(thanosParser.FROM);
          this.state = 332;
          this.thanosSubquery();
          break;
        case 28:
          this.enterOuterAlt(localctx, 2);
          this.state = 333;
          this.match(thanosParser.JOIN);
          this.state = 334;
          this.thanosSubquery();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  normalStmt() {
    let localctx = new NormalStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, thanosParser.RULE_normalStmt);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 337;
      this.remaining();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  remaining() {
    let localctx = new RemainingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, thanosParser.RULE_remaining);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 342;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
      while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1 + 1) {
          this.state = 339;
          this.matchWildcard();
        }
        this.state = 344;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  normalParenException() {
    let localctx = new NormalParenExceptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, thanosParser.RULE_normalParenException);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 345;
      this.match(thanosParser.LEFT_PAREN);
      this.state = 346;
      this.remaining();
      this.state = 348;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 37) {
        this.state = 347;
        this.normalParenException();
      }

      this.state = 350;
      this.match(thanosParser.RIGHT_PAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

thanosParser.EOF = antlr4.Token.EOF;
thanosParser.MODEL = 1;
thanosParser.BUILD = 2;
thanosParser.FIT = 3;
thanosParser.UPLOAD = 4;
thanosParser.DELETE = 5;
thanosParser.TRANSFORM = 6;
thanosParser.PREDICT = 7;
thanosParser.EVALUATE = 8;
thanosParser.CONVERT = 9;
thanosParser.SEARCH = 10;
thanosParser.FUNCTION = 11;
thanosParser.PRINT = 12;
thanosParser.COPY = 13;
thanosParser.LIST = 14;
thanosParser.TABLE = 15;
thanosParser.THANOSQL = 16;
thanosParser.DATASET = 17;
thanosParser.GET = 18;
thanosParser.USING = 19;
thanosParser.OPTIONS = 20;
thanosParser.AS = 21;
thanosParser.BY = 22;
thanosParser.IMAGE = 23;
thanosParser.AUDIO = 24;
thanosParser.VIDEO = 25;
thanosParser.KEYWORD = 26;
thanosParser.TEXT = 27;
thanosParser.JOIN = 28;
thanosParser.FROM = 29;
thanosParser.IDENTIFIER = 30;
thanosParser.NAME = 31;
thanosParser.OPERATOR_SPECIAL = 32;
thanosParser.COLON = 33;
thanosParser.SEMI_COLON = 34;
thanosParser.COMMA = 35;
thanosParser.EQUAL = 36;
thanosParser.LEFT_PAREN = 37;
thanosParser.RIGHT_PAREN = 38;
thanosParser.LEFT_SQURE = 39;
thanosParser.RIGHT_SQURE = 40;
thanosParser.DIVIDE = 41;
thanosParser.MULTIPLY = 42;
thanosParser.DOT = 43;
thanosParser.LT = 44;
thanosParser.GT = 45;
thanosParser.MINUS = 46;
thanosParser.SIMPLE_COMMENT = 47;
thanosParser.BRACKETED_COMMENT = 48;
thanosParser.WS = 49;

thanosParser.RULE_thanosLanguage = 0;
thanosParser.RULE_thanosQuery = 1;
thanosParser.RULE_thanosStmt = 2;
thanosParser.RULE_thanosNoSubqueryStmt = 3;
thanosParser.RULE_thanosSubqueryStmt = 4;
thanosParser.RULE_thanosSubquery = 5;
thanosParser.RULE_thanosBuildModelStmt = 6;
thanosParser.RULE_thanosFitModelStmt = 7;
thanosParser.RULE_thanosUploadModelStmt = 8;
thanosParser.RULE_thanosDeleteModelStmt = 9;
thanosParser.RULE_thanosPredictStmt = 10;
thanosParser.RULE_thanosEvaluateStmt = 11;
thanosParser.RULE_thanosConvertStmt = 12;
thanosParser.RULE_thanosSearchStmt = 13;
thanosParser.RULE_thanosSearchImageStmt = 14;
thanosParser.RULE_thanosSearchAudioStmt = 15;
thanosParser.RULE_thanosSearchVideoStmt = 16;
thanosParser.RULE_thanosSearchKeywordStmt = 17;
thanosParser.RULE_thanosSearchTextStmt = 18;
thanosParser.RULE_thanosFunctionStmt = 19;
thanosParser.RULE_thanosPrintStmt = 20;
thanosParser.RULE_thanosPrintImageStmt = 21;
thanosParser.RULE_thanosPrintAudioStmt = 22;
thanosParser.RULE_thanosPrintVideoStmt = 23;
thanosParser.RULE_thanosCopyStmt = 24;
thanosParser.RULE_thanosListStmt = 25;
thanosParser.RULE_thanosListTableStmt = 26;
thanosParser.RULE_thanosListModelStmt = 27;
thanosParser.RULE_thanosListThanoSQLModelStmt = 28;
thanosParser.RULE_thanosListThanoSQLDatasetStmt = 29;
thanosParser.RULE_thanosGetStmt = 30;
thanosParser.RULE_thanosGetThanoSQLModelStmt = 31;
thanosParser.RULE_thanosGetThanoSQLDatasetStmt = 32;
thanosParser.RULE_thanosUsingStmt = 33;
thanosParser.RULE_thanosOptionStmt = 34;
thanosParser.RULE_normalSubquery = 35;
thanosParser.RULE_normalStmt = 36;
thanosParser.RULE_remaining = 37;
thanosParser.RULE_normalParenException = 38;

export class ThanosLanguageContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosLanguage;
  }

  thanosQuery() {
    return this.getTypedRuleContext(ThanosQueryContext, 0);
  }

  EOF() {
    return this.getToken(thanosParser.EOF, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosLanguage(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosLanguage(this);
    }
  }
}

class ThanosQueryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosQuery;
  }

  normalStmt = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NormalStmtContext);
    } else {
      return this.getTypedRuleContext(NormalStmtContext, i);
    }
  };

  thanosStmt = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ThanosStmtContext);
    } else {
      return this.getTypedRuleContext(ThanosStmtContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosQuery(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosQuery(this);
    }
  }
}

class ThanosStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosStmt;
  }

  thanosNoSubqueryStmt() {
    return this.getTypedRuleContext(ThanosNoSubqueryStmtContext, 0);
  }

  thanosSubqueryStmt() {
    return this.getTypedRuleContext(ThanosSubqueryStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosStmt(this);
    }
  }
}

class ThanosNoSubqueryStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosNoSubqueryStmt;
  }

  thanosBuildModelStmt() {
    return this.getTypedRuleContext(ThanosBuildModelStmtContext, 0);
  }

  thanosFitModelStmt() {
    return this.getTypedRuleContext(ThanosFitModelStmtContext, 0);
  }

  thanosUploadModelStmt() {
    return this.getTypedRuleContext(ThanosUploadModelStmtContext, 0);
  }

  thanosDeleteModelStmt() {
    return this.getTypedRuleContext(ThanosDeleteModelStmtContext, 0);
  }

  thanosPrintStmt() {
    return this.getTypedRuleContext(ThanosPrintStmtContext, 0);
  }

  thanosCopyStmt() {
    return this.getTypedRuleContext(ThanosCopyStmtContext, 0);
  }

  thanosGetStmt() {
    return this.getTypedRuleContext(ThanosGetStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosNoSubqueryStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosNoSubqueryStmt(this);
    }
  }
}

class ThanosSubqueryStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSubqueryStmt;
  }

  thanosPredictStmt() {
    return this.getTypedRuleContext(ThanosPredictStmtContext, 0);
  }

  thanosEvaluateStmt() {
    return this.getTypedRuleContext(ThanosEvaluateStmtContext, 0);
  }

  thanosConvertStmt() {
    return this.getTypedRuleContext(ThanosConvertStmtContext, 0);
  }

  thanosSearchStmt() {
    return this.getTypedRuleContext(ThanosSearchStmtContext, 0);
  }

  thanosFunctionStmt() {
    return this.getTypedRuleContext(ThanosFunctionStmtContext, 0);
  }

  thanosListStmt() {
    return this.getTypedRuleContext(ThanosListStmtContext, 0);
  }

  normalSubquery() {
    return this.getTypedRuleContext(NormalSubqueryContext, 0);
  }

  normalParenException() {
    return this.getTypedRuleContext(NormalParenExceptionContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSubqueryStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSubqueryStmt(this);
    }
  }
}

class ThanosSubqueryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSubquery;
  }

  LEFT_PAREN() {
    return this.getToken(thanosParser.LEFT_PAREN, 0);
  }

  normalStmt = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NormalStmtContext);
    } else {
      return this.getTypedRuleContext(NormalStmtContext, i);
    }
  };

  RIGHT_PAREN() {
    return this.getToken(thanosParser.RIGHT_PAREN, 0);
  }

  thanosSubqueryStmt = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ThanosSubqueryStmtContext);
    } else {
      return this.getTypedRuleContext(ThanosSubqueryStmtContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSubquery(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSubquery(this);
    }
  }
}

class ThanosBuildModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosBuildModelStmt;
    this.user_model_name = null; // Token
  }

  BUILD() {
    return this.getToken(thanosParser.BUILD, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosBuildModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosBuildModelStmt(this);
    }
  }
}

class ThanosFitModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosFitModelStmt;
    this.user_model_name = null; // Token
  }

  FIT() {
    return this.getToken(thanosParser.FIT, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosFitModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosFitModelStmt(this);
    }
  }
}

class ThanosUploadModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosUploadModelStmt;
    this.user_model_name = null; // Token
    this.path = null; // Token
  }

  UPLOAD() {
    return this.getToken(thanosParser.UPLOAD, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  FROM() {
    return this.getToken(thanosParser.FROM, 0);
  }

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.IDENTIFIER);
    } else {
      return this.getToken(thanosParser.IDENTIFIER, i);
    }
  };

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosUploadModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosUploadModelStmt(this);
    }
  }
}

class ThanosDeleteModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosDeleteModelStmt;
    this.built_model_name = null; // Token
  }

  DELETE() {
    return this.getToken(thanosParser.DELETE, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosDeleteModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosDeleteModelStmt(this);
    }
  }
}

class ThanosPredictStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosPredictStmt;
  }

  PREDICT() {
    return this.getToken(thanosParser.PREDICT, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosPredictStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosPredictStmt(this);
    }
  }
}

class ThanosEvaluateStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosEvaluateStmt;
  }

  EVALUATE() {
    return this.getToken(thanosParser.EVALUATE, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosEvaluateStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosEvaluateStmt(this);
    }
  }
}

class ThanosConvertStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosConvertStmt;
  }

  CONVERT() {
    return this.getToken(thanosParser.CONVERT, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosConvertStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosConvertStmt(this);
    }
  }
}

class ThanosSearchStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchStmt;
  }

  SEARCH() {
    return this.getToken(thanosParser.SEARCH, 0);
  }

  thanosSearchImageStmt() {
    return this.getTypedRuleContext(ThanosSearchImageStmtContext, 0);
  }

  thanosSearchAudioStmt() {
    return this.getTypedRuleContext(ThanosSearchAudioStmtContext, 0);
  }

  thanosSearchVideoStmt() {
    return this.getTypedRuleContext(ThanosSearchVideoStmtContext, 0);
  }

  thanosSearchKeywordStmt() {
    return this.getTypedRuleContext(ThanosSearchKeywordStmtContext, 0);
  }

  thanosSearchTextStmt() {
    return this.getTypedRuleContext(ThanosSearchTextStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchStmt(this);
    }
  }
}

class ThanosSearchImageStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchImageStmt;
  }

  IMAGE() {
    return this.getToken(thanosParser.IMAGE, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchImageStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchImageStmt(this);
    }
  }
}

class ThanosSearchAudioStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchAudioStmt;
  }

  AUDIO() {
    return this.getToken(thanosParser.AUDIO, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchAudioStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchAudioStmt(this);
    }
  }
}

class ThanosSearchVideoStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchVideoStmt;
  }

  VIDEO() {
    return this.getToken(thanosParser.VIDEO, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchVideoStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchVideoStmt(this);
    }
  }
}

class ThanosSearchKeywordStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchKeywordStmt;
  }

  KEYWORD() {
    return this.getToken(thanosParser.KEYWORD, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchKeywordStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchKeywordStmt(this);
    }
  }
}

class ThanosSearchTextStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosSearchTextStmt;
  }

  TEXT() {
    return this.getToken(thanosParser.TEXT, 0);
  }

  thanosUsingStmt() {
    return this.getTypedRuleContext(ThanosUsingStmtContext, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosSearchTextStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosSearchTextStmt(this);
    }
  }
}

class ThanosFunctionStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosFunctionStmt;
    this.built_function_name = null; // Token
    this.input_data = null; // Token
  }

  FUNCTION() {
    return this.getToken(thanosParser.FUNCTION, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.IDENTIFIER);
    } else {
      return this.getToken(thanosParser.IDENTIFIER, i);
    }
  };

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  FROM() {
    return this.getToken(thanosParser.FROM, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosFunctionStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosFunctionStmt(this);
    }
  }
}

class ThanosPrintStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosPrintStmt;
  }

  PRINT() {
    return this.getToken(thanosParser.PRINT, 0);
  }

  thanosPrintImageStmt() {
    return this.getTypedRuleContext(ThanosPrintImageStmtContext, 0);
  }

  thanosPrintAudioStmt() {
    return this.getTypedRuleContext(ThanosPrintAudioStmtContext, 0);
  }

  thanosPrintVideoStmt() {
    return this.getTypedRuleContext(ThanosPrintVideoStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosPrintStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosPrintStmt(this);
    }
  }
}

class ThanosPrintImageStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosPrintImageStmt;
  }

  IMAGE() {
    return this.getToken(thanosParser.IMAGE, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosPrintImageStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosPrintImageStmt(this);
    }
  }
}

class ThanosPrintAudioStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosPrintAudioStmt;
  }

  AUDIO() {
    return this.getToken(thanosParser.AUDIO, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosPrintAudioStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosPrintAudioStmt(this);
    }
  }
}

class ThanosPrintVideoStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosPrintVideoStmt;
  }

  VIDEO() {
    return this.getToken(thanosParser.VIDEO, 0);
  }

  AS() {
    return this.getToken(thanosParser.AS, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosPrintVideoStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosPrintVideoStmt(this);
    }
  }
}

class ThanosCopyStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosCopyStmt;
    this.user_table_name = null; // Token
    this.input_data = null; // Token
  }

  COPY() {
    return this.getToken(thanosParser.COPY, 0);
  }

  FROM() {
    return this.getToken(thanosParser.FROM, 0);
  }

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.IDENTIFIER);
    } else {
      return this.getToken(thanosParser.IDENTIFIER, i);
    }
  };

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosCopyStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosCopyStmt(this);
    }
  }
}

class ThanosListStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosListStmt;
  }

  LIST() {
    return this.getToken(thanosParser.LIST, 0);
  }

  thanosListTableStmt() {
    return this.getTypedRuleContext(ThanosListTableStmtContext, 0);
  }

  thanosListModelStmt() {
    return this.getTypedRuleContext(ThanosListModelStmtContext, 0);
  }

  thanosListThanoSQLModelStmt() {
    return this.getTypedRuleContext(ThanosListThanoSQLModelStmtContext, 0);
  }

  thanosListThanoSQLDatasetStmt() {
    return this.getTypedRuleContext(ThanosListThanoSQLDatasetStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosListStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosListStmt(this);
    }
  }
}

class ThanosListTableStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosListTableStmt;
  }

  TABLE() {
    return this.getToken(thanosParser.TABLE, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosListTableStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosListTableStmt(this);
    }
  }
}

class ThanosListModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosListModelStmt;
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosListModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosListModelStmt(this);
    }
  }
}

class ThanosListThanoSQLModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosListThanoSQLModelStmt;
  }

  THANOSQL() {
    return this.getToken(thanosParser.THANOSQL, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosListThanoSQLModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosListThanoSQLModelStmt(this);
    }
  }
}

class ThanosListThanoSQLDatasetStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosListThanoSQLDatasetStmt;
  }

  THANOSQL() {
    return this.getToken(thanosParser.THANOSQL, 0);
  }

  DATASET() {
    return this.getToken(thanosParser.DATASET, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosListThanoSQLDatasetStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosListThanoSQLDatasetStmt(this);
    }
  }
}

class ThanosGetStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosGetStmt;
  }

  GET() {
    return this.getToken(thanosParser.GET, 0);
  }

  thanosGetThanoSQLModelStmt() {
    return this.getTypedRuleContext(ThanosGetThanoSQLModelStmtContext, 0);
  }

  thanosGetThanoSQLDatasetStmt() {
    return this.getTypedRuleContext(ThanosGetThanoSQLDatasetStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosGetStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosGetStmt(this);
    }
  }
}

class ThanosGetThanoSQLModelStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosGetThanoSQLModelStmt;
    this.built_model_name = null; // Token
  }

  THANOSQL() {
    return this.getToken(thanosParser.THANOSQL, 0);
  }

  MODEL() {
    return this.getToken(thanosParser.MODEL, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosGetThanoSQLModelStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosGetThanoSQLModelStmt(this);
    }
  }
}

class ThanosGetThanoSQLDatasetStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosGetThanoSQLDatasetStmt;
    this.dataset_name = null; // Token
  }

  THANOSQL() {
    return this.getToken(thanosParser.THANOSQL, 0);
  }

  DATASET() {
    return this.getToken(thanosParser.DATASET, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosGetThanoSQLDatasetStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosGetThanoSQLDatasetStmt(this);
    }
  }
}

class ThanosUsingStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosUsingStmt;
    this.built_model_name = null; // Token
  }

  USING() {
    return this.getToken(thanosParser.USING, 0);
  }

  IDENTIFIER() {
    return this.getToken(thanosParser.IDENTIFIER, 0);
  }

  thanosOptionStmt() {
    return this.getTypedRuleContext(ThanosOptionStmtContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosUsingStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosUsingStmt(this);
    }
  }
}

class ThanosOptionStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_thanosOptionStmt;
    this._IDENTIFIER = null; // Token
    this.paramsKey = []; // of Tokens
    this.paramsValue = []; // of Tokens
  }

  OPTIONS() {
    return this.getToken(thanosParser.OPTIONS, 0);
  }

  LEFT_PAREN() {
    return this.getToken(thanosParser.LEFT_PAREN, 0);
  }

  EQUAL = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.EQUAL);
    } else {
      return this.getToken(thanosParser.EQUAL, i);
    }
  };

  RIGHT_PAREN() {
    return this.getToken(thanosParser.RIGHT_PAREN, 0);
  }

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.IDENTIFIER);
    } else {
      return this.getToken(thanosParser.IDENTIFIER, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(thanosParser.COMMA);
    } else {
      return this.getToken(thanosParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterThanosOptionStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitThanosOptionStmt(this);
    }
  }
}

class NormalSubqueryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_normalSubquery;
  }

  FROM() {
    return this.getToken(thanosParser.FROM, 0);
  }

  thanosSubquery() {
    return this.getTypedRuleContext(ThanosSubqueryContext, 0);
  }

  JOIN() {
    return this.getToken(thanosParser.JOIN, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterNormalSubquery(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitNormalSubquery(this);
    }
  }
}

class NormalStmtContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_normalStmt;
  }

  remaining() {
    return this.getTypedRuleContext(RemainingContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterNormalStmt(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitNormalStmt(this);
    }
  }
}

class RemainingContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_remaining;
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterRemaining(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitRemaining(this);
    }
  }
}

class NormalParenExceptionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = thanosParser.RULE_normalParenException;
  }

  LEFT_PAREN() {
    return this.getToken(thanosParser.LEFT_PAREN, 0);
  }

  remaining() {
    return this.getTypedRuleContext(RemainingContext, 0);
  }

  RIGHT_PAREN() {
    return this.getToken(thanosParser.RIGHT_PAREN, 0);
  }

  normalParenException() {
    return this.getTypedRuleContext(NormalParenExceptionContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.enterNormalParenException(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof thanosParserListener) {
      listener.exitNormalParenException(this);
    }
  }
}

thanosParser.ThanosLanguageContext = ThanosLanguageContext;
thanosParser.ThanosQueryContext = ThanosQueryContext;
thanosParser.ThanosStmtContext = ThanosStmtContext;
thanosParser.ThanosNoSubqueryStmtContext = ThanosNoSubqueryStmtContext;
thanosParser.ThanosSubqueryStmtContext = ThanosSubqueryStmtContext;
thanosParser.ThanosSubqueryContext = ThanosSubqueryContext;
thanosParser.ThanosBuildModelStmtContext = ThanosBuildModelStmtContext;
thanosParser.ThanosFitModelStmtContext = ThanosFitModelStmtContext;
thanosParser.ThanosUploadModelStmtContext = ThanosUploadModelStmtContext;
thanosParser.ThanosDeleteModelStmtContext = ThanosDeleteModelStmtContext;
thanosParser.ThanosPredictStmtContext = ThanosPredictStmtContext;
thanosParser.ThanosEvaluateStmtContext = ThanosEvaluateStmtContext;
thanosParser.ThanosConvertStmtContext = ThanosConvertStmtContext;
thanosParser.ThanosSearchStmtContext = ThanosSearchStmtContext;
thanosParser.ThanosSearchImageStmtContext = ThanosSearchImageStmtContext;
thanosParser.ThanosSearchAudioStmtContext = ThanosSearchAudioStmtContext;
thanosParser.ThanosSearchVideoStmtContext = ThanosSearchVideoStmtContext;
thanosParser.ThanosSearchKeywordStmtContext = ThanosSearchKeywordStmtContext;
thanosParser.ThanosSearchTextStmtContext = ThanosSearchTextStmtContext;
thanosParser.ThanosFunctionStmtContext = ThanosFunctionStmtContext;
thanosParser.ThanosPrintStmtContext = ThanosPrintStmtContext;
thanosParser.ThanosPrintImageStmtContext = ThanosPrintImageStmtContext;
thanosParser.ThanosPrintAudioStmtContext = ThanosPrintAudioStmtContext;
thanosParser.ThanosPrintVideoStmtContext = ThanosPrintVideoStmtContext;
thanosParser.ThanosCopyStmtContext = ThanosCopyStmtContext;
thanosParser.ThanosListStmtContext = ThanosListStmtContext;
thanosParser.ThanosListTableStmtContext = ThanosListTableStmtContext;
thanosParser.ThanosListModelStmtContext = ThanosListModelStmtContext;
thanosParser.ThanosListThanoSQLModelStmtContext = ThanosListThanoSQLModelStmtContext;
thanosParser.ThanosListThanoSQLDatasetStmtContext = ThanosListThanoSQLDatasetStmtContext;
thanosParser.ThanosGetStmtContext = ThanosGetStmtContext;
thanosParser.ThanosGetThanoSQLModelStmtContext = ThanosGetThanoSQLModelStmtContext;
thanosParser.ThanosGetThanoSQLDatasetStmtContext = ThanosGetThanoSQLDatasetStmtContext;
thanosParser.ThanosUsingStmtContext = ThanosUsingStmtContext;
thanosParser.ThanosOptionStmtContext = ThanosOptionStmtContext;
thanosParser.NormalSubqueryContext = NormalSubqueryContext;
thanosParser.NormalStmtContext = NormalStmtContext;
thanosParser.RemainingContext = RemainingContext;
thanosParser.NormalParenExceptionContext = NormalParenExceptionContext;
