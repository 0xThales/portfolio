import { atom } from "nanostores"

export const pageIndex = atom<number>(0)

export const isMaximized = atom<boolean>(false)

export const sectionCount = atom<number>(0)

export const gameOn = atom<boolean>(false)

export const modalContentId = atom<string>("")

export const knobState = atom<{ left: boolean; right: boolean; up: boolean; down: boolean }>({
    left: false,
    right: false,
    up: false,
    down: false
})
