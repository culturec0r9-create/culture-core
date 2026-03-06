export function slugify(text: string) {
  return text
    .toLowerCase()            // 小文字にする
    .trim()                   // 前後の空白削除
    .replace(/&/g, "and")     // & を and に
    .replace(/[^a-z0-9]+/g, "-") // 記号や空白を - に
    .replace(/^-+|-+$/g, ""); // 先頭末尾の - を削除
}