<template>
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="https://dragoncrypto.io/" target="blank">
      <img src="../assets/logo.png" alt="" width="150" height="60">
    </a>
    <router-link to="/" class="btn btn-outline-secondary me-2" type="button">
      Swap
      <img src="../assets/swap-img.png" alt="" width="20" height="20">
    </router-link>
    <router-link to="/pools" class="btn btn-outline-secondary me-2" type="button">
      Pools
      <img src="../assets/pools.png" alt="" width="20" height="20">
      </router-link>
    <button class="btn btn-outline-secondary me-2" type="button" data-bs-target="#settingsModal" data-bs-toggle="modal">
      Settings
      <img src="../assets/set.png" alt="" width="20" height="20">
    </button>
      <div class="modal" id="settingsModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Transaction Settings</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h6 class="pb-2">Default Transaction Speed (GWEI)</h6>
                <button type="button" class="btn btn-secondary gas-price">Slow (5)</button>
                <button type="button" class="btn btn-secondary gas-price">Medium (6)</button>
                <button type="button" class="btn btn-secondary gas-price">Fast (7)</button>
                <input type="number" placeholder="7">
              <h6 class="pt-3 pb-2">Slippage Tolerance (%)</h6>
                <input type="number" placeholder="1">
              <h6 class="pt-3 pb-2"> Transaction Deadline (Mins)</h6>
                <input type="number" placeholder="5">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    <button @click="login" class="btn btn-outline-secondary me-2" type="button">
      {{ buttonContent }} {{ accountId }}
      <img src="../assets/wallet-connect.png" width="20" height="20">
      </button>
  </div>
</nav>
</template>

<script setup>
import { ref, watchEffect } from "vue"
import MetaMaskOnboarding from '@metamask/onboarding'

let buttonContent = ref('Connect Wallet')
let accountId = ref('')

const onboarding = new MetaMaskOnboarding()

const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask)
}

const onClickInstallMetaMask = () => {
    onboarding.startOnboarding()
    loader.style.display = 'block'
}

let connected = (accounts) => {
    buttonContent.value = 'Connected!'
    accountId.value = accounts[0]
}

async function connectWallet() {
  return await ethereum.request({method: 'eth_accounts'})
}

async function login() {
  try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        connected(accounts)
    } catch (error) {
        console.error(error)
    }
}
  
watchEffect(() => {
    if (!isMetaMaskInstalled()) {
        buttonContent.value = 'Click to Install a Wallet'
        login = onClickInstallMetaMask
    } else {
        connectWallet().then((accounts) => {
            if (accounts && accounts[0] > 0) {
                connected(accounts)
            } else {
                buttonContent.value = 'Connect your wallet'
            }
        })
    }
})

</script>

<style scoped>
  .gas-price {
    margin-right: 15px;
    margin-bottom: 10px;
  }

</style>