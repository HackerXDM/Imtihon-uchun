import React from 'react'
import { NFTCard } from "components/card/NftCard";

const Xizmatlar = () => {
  return (
    <>
     <NFTCard
      title="ETH AI Brain"
      author="Nick Wilson"
      bidders={["/img/avatar2.png", "/img/avatar3.png", "/img/avatar4.png"]}
      image="/img/Nft1.png"
      currentBid="0.91 ETH"
      download="#"
      extra="max-w-[370px]"
    />;
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
     
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
    </>
  )
}

export default Xizmatlar