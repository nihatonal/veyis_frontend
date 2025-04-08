import React from "react";

const HizmetSozlesmesi = () => {
    return (
        <div className="container mx-auto pt-20 lg:pt-32 px-6 sm:px-20 pb-10">
            <h1 className="text-3xl font-bold mb-4">HİZMET SÖZLEŞMESİ</h1>
            <p className="mb-4">
                Bu hizmet sözleşmesi, <strong>[Geçici Şirket Adı]</strong> ("Şirket") ve web sitemiz
                <strong> [Geçici Web Sitesi Adı]</strong> üzerinden alışveriş yapan kullanıcılar ("Müşteri")
                arasında yapılmıştır. Sözleşme, sipariş verme, teslimat, iade, ödeme ve diğer ilgili konuları düzenler.
            </p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. SİPARİŞ VE TESLİMAT</h2>
                <ul className="list-disc pl-6">
                    <li>Siparişler, ödeme onaylandıktan sonra en geç 30 gün içinde müşteriye teslim edilir.</li>
                    <li>Ürünler, yalnızca Şirket’in belirlediği kargo firmaları ile gönderilir.</li>
                    <li>Kargo ücreti sipariş sırasında belirtilir ve toplam tutara eklenir.</li>
                    <li>Ön sipariş verilen ürünler belirtilen tarihte teslim edilir.</li>
                    <li>Üçüncü kişiye teslimatta, kişi teslimatı kabul etmezse Şirket sorumlu değildir.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. ÖDEME KOŞULLARI</h2>
                <ul className="list-disc pl-6">
                    <li>Tüm fiyatlara KDV dahildir, vergi hariç satış yapılmaz.</li>
                    <li>Şirket, ödeme seçeneklerini değiştirme hakkına sahiptir.</li>
                    <li>Havale ile yapılan ödemelerde, ücret 3 gün içinde yatırılmazsa sipariş iptal edilir.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. İADE VE İPTAL KOŞULLARI</h2>
                <ul className="list-disc pl-6">
                    <li>Kişiye özel ve gıda ürünleri iade edilemez.</li>
                    <li>İade edilebilen ürünlerde, kullanılmamış ve orijinal ambalajında olması gerekir.</li>
                    <li>İade işlemi için müşteri hizmetleriyle iletişime geçilmelidir.</li>
                    <li>Ücret iadeleri, ödeme yöntemi kullanılarak yapılır ve 7-14 gün sürebilir.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. GİZLİLİK VE GÜVENLİK</h2>
                <ul className="list-disc pl-6">
                    <li>Müşteriler, hesaplarına yalnızca kendileri erişebilir.</li>
                    <li>Kredi kartı bilgileri sistemde saklanmaz, ödemeler güvenli altyapılarla yapılır.</li>
                    <li>Şirket, müşteri bilgilerini üçüncü kişilerle paylaşmaz.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. HİZMET KESİNTİLERİ VE TEKNİK SORUMLULUKLAR</h2>
                <ul className="list-disc pl-6">
                    <li>Teknik arızalar ve bakım çalışmaları nedeniyle yaşanabilecek aksaklıklardan Şirket sorumlu tutulamaz.</li>
                    <li>Şirket, site içeriğinde ve fiyatlarda değişiklik yapma hakkını saklı tutar.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. YASAL SORUMLULUKLAR</h2>
                <ul className="list-disc pl-6">
                    <li>Şirket, 18 yaş altındaki kişilere satış yapmaz.</li>
                    <li>Tüm yasal anlaşmazlıklarda Tüketici Hakem Heyetleri ve Mahkemeleri yetkilidir.</li>
                </ul>
            </section>

            <p className="mt-4">
                Bu sözleşme, müşterinin <strong>[Geçici Web Sitesi Adı]</strong> üzerinden alışveriş yapmasıyla birlikte kabul edilmiş sayılır.
            </p>
        </div>
    );
};

export default HizmetSozlesmesi;
