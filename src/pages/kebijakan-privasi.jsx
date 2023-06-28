import Head from 'next/head'
import Link from 'next/link'

import { PrivasiLayout } from '@/components/PrivasiLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export default function Register() {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi Finre</title>
      </Head>
      <PrivasiLayout
        title="Kebijakan Privasi Finre"
      >
      <div className="grid gap-2">
        <p className="mt-2 text-lg text-gray-600">
        Privasi anda sangat penting bagi kami. Kebijakan privasi ini untuk memberikan penjelasan kepada anda terkait dengan pengumpulan, penggunaan, penyimpanan dan penghapusan informasi pribadi yang kami berlakukan.
        </p>
        <p className="mt-2 text-lg text-gray-600">
        Dengan menggunakan aplikasi Finre anda mengakui bahwa anda telah membaca, memahami dan meyetujui seluruh ketentuan yang terdapat dalam kebijakan privasi ini.
        </p>
        <h3 className="font-semibold text-gray-900">1. Pengumpulan Informasi Pribadi</h3>
        <p className="mt-1 ml-10 text-lg text-gray-600">
        Pada saat anda daftar pada aplikasi Finre, kami dapat mengumpulkan informasi pribadi anda antara lain, Nama, Email, Password. Untuk kami gunakan sebagai autentikasi dan verifikasi pengguna yang sah.
        </p>
        <h3 className="font-semibold text-gray-900">2. Penggunaan Informasi Pribadi</h3>
        <p className="mt-1 ml-10 text-lg text-gray-600">
        Informasi Pribadi yang kami kumpulkan seperti email dan password, kami gunakan untuk autentikasi dan verifikasi pengguna yang sah.
        </p>

      </div>

      </PrivasiLayout>
    </>
  )
}
