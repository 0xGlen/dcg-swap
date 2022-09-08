<template>
  <div class="card mx-auto">
  <div class="card-header">
     <h5 class="card-title text-center">Swap Tokens</h5>
  </div>
  <div class="card-body">
    
    <div class="input-group">
    <input type="number" class="form-control mb-3" placeholder="Enter Input Token Amount">
    <button class="btn btn-outline-secondary mb-3" type="button">MAX</button>
    <button class="btn btn-outline-secondary mb-3" type="button" data-bs-target="#tokenModal" data-bs-toggle="modal">DCAU</button>
    </div>

    <div class="text-center mb-3">
       <img src="../assets/swap-img.png" alt="" width="20" height="20">
    </div>
    
   
    <div class="input-group">
    <input type="number" class="form-control mb-3" placeholder="Output Token Amount">
    <button class="btn btn-outline-secondary mb-3" type="button" data-bs-target="#tokenModal" data-bs-toggle="modal">USDC</button>
    </div>
       <!-- Token List Modal -->
        <div class="modal" id="tokenModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Select a token</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h6 class="modal-title mb-3">Token List</h6>
                <button type="button" class="btn btn-secondary">DCAU</button>
                <button type="button" class="btn btn-secondary mx-2">DCAR</button>
                <button type="button" class="btn btn-secondary">USDC</button>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    <!-- Token List Modal End-->

    <div class="text-center">
    <button class="btn btn-outline-secondary" type="button"> {{ swapButtonContent }} </button>
    </div>
  </div>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from "vue"
  
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask)
}

async function connectWallet() {
  return await ethereum.request({method: 'eth_accounts'})
}

let swapButtonContent = ref('Connect Wallet to Swap')

watchEffect(() => {
    if (!isMetaMaskInstalled()) {
        swapButtonContent.value = 'Install a Wallet to Swap'
    } else {
        connectWallet().then((accounts) => {
            if (accounts && accounts[0] > 0) {
                swapButtonContent.value = 'Swap'
            } 
        })
    }
})
</script>

<style scoped>
  .card {
    margin: 25vh auto;
    width: 25em;
  }

  .card-header {
    background-color: #dad6eb
  }

</style>
