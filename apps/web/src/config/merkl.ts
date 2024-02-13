import { ChainId } from '@pancakeswap/chains'

const DISTRIBUTOR_ADDRESS = '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae' as const

export const DISTRIBUTOR_ADDRESSES = {
  [ChainId.ETHEREUM]: DISTRIBUTOR_ADDRESS,
  [ChainId.BSC]: DISTRIBUTOR_ADDRESS,
}
