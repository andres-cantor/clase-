import { h } from 'preact';
import { useState } from 'preact/hooks';
import { BrowserRouter } from 'preact-router';
import Layout from './Components/layout/MainLayout';
/*import './index.css'
import Navbar from './components/Navbar'
import ProductCard from './Components/ProductCard'*/

function app() {
  // cartCount 
  const [cartCount, setCartCount] = useState(0);
  return (
    <BrowserRouter>
    <Layout cartCount={cartCount}>
     ...   
    </Layout>

    </BrowserRouter>
  );
}

export default app;

function IconEye() {
  return (
    <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white ml-2">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  )
}

function UserCard({ name, role, image}) {
  return (
    <div class={`rounded-3xl bg-white shadow-3xl overflow-hidden relative ring-1 ring-gray-600`}>
      <div class="relative">
        <img src={image} alt={name} class="w-full h-44 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div class="p-5">
        <div class="flex items-center">
          <h3 class="text-lg font-semibold text-gray-900">{name}</h3>
          <VerifiedBadge />
        </div>
        <p class="mt-2 text-sm text-gray-500">{role}</p>

        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-center space-x-4 text-sm text-gray-600">
            <span class="flex items-center space-x-2">
              <IconUser />
              <span>312</span>
            </span>
            <span class="flex items-center space-x-2">
              <IconEye />
              <span>48</span>
            </span>
          </div>
          <button class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50">
             <span class="text-gray-400">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export function App() {
  const sample = 'https://tse1.mm.bing.net/th/id/OIP.__A7YtMLg-Dz1Rdru5Yy6gHaFu?rs=1&pid=ImgDetMain&o=7&rm=3'

  return (
    <div class="w-full flex items-center justify-center px-6 py-12">
      <div class="max-w-xs w-full">
        <div class="relative">
          <div class="rounded-3xl bg-white shadow-xl overflow-hidden ring-1 ring-gray-200">
            <img src={sample} alt="cover" class="w-full h-44 object-cover rounded-t-3xl" />

            <div class="px-6 pb-6 pt-5">
              <div class="flex items-start gap-3">
                <div class="flex-1">
                  <div class="flex items-center">
                    <h3 class="text-lg font-semibold text-gray-900">stranger things</h3>
                    <VerifiedBadge />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">la realidad no es lo que se logra ver si no lo que esta oculto.</p>
                </div>
              </div>

              <div class="mt-5 flex items-center justify-between">
                <div class="flex items-center gap-4 text-sm text-gray-600">
                  <div class="flex items-center gap-2">
                    <IconUser />
                    <span class="text-sm">312</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <IconEye />
                    <span class="text-sm">48</span>
                  </div>
                </div>

                <button class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md">
                  <span>Follow</span>
                  <span class="text-gray-400">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* soft outer glow like reference */}
          <div class="pointer-events-none absolute inset-0 -z-10 flex items-end justify-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-b from-white/60 to-transparent blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

