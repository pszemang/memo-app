import lodash from 'lodash'

export const POSSIBLE_KEYS = ["🤣", "😁", "😅", "😇", "😛", "😎", "🤓", "🤪"]

const KEYS_POOL = lodash.shuffle([...POSSIBLE_KEYS, ...POSSIBLE_KEYS])

export const generateGameBoard = () => KEYS_POOL
