import lodash from 'lodash'

const POSSIBLE_KEYS = ["🤣", "😁", "😅", "😇", "😛", "😎", "🤓", "🤪"]

const KEYS_POOL = lodash.shuffle([...POSSIBLE_KEYS, ...POSSIBLE_KEYS])

const generateGameBoard = () => KEYS_POOL

export default generateGameBoard
