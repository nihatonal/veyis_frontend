import { Helmet } from "react-helmet";
import './PrivacyPolicy.css'
const PrivacyPolicy = () => {
    return (
        <div className="container policy_container">

            <Helmet>
                <title>Gizlilik Politikası | Şirket Adı</title>
                <meta
                    name="description"
                    content="Şirketimizin gizlilik politikası hakkında bilgi edinin. Kişisel verilerinizin nasıl işlendiğini ve korunduğunu öğrenin."
                />
            </Helmet>
            <h1 className="text-3xl font-bold mb-4">Gizlilik Politikası</h1>
            <p className="mb-4">
                Şirketimiz, kullanıcılarımızın gizliliğini korumayı taahhüt eder. Bu politika, kişisel
                bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Toplanan Bilgiler</h2>
            <p className="mb-4">Web sitemizi ziyaret ettiğinizde, aşağıdaki türde bilgileri toplayabiliriz:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Ad, soyad, e-posta adresi, telefon numarası gibi kişisel bilgiler</li>
                <li>IP adresiniz, tarayıcı türü, cihaz bilgileri gibi teknik veriler</li>
                <li>Çerezler ve benzeri teknolojiler aracılığıyla toplanan kullanım verileri</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Bilgi Kullanımı</h2>
            <p className="mb-4">Toplanan bilgiler aşağıdaki amaçlarla kullanılabilir:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Hizmetlerimizi sağlamak, yönetmek ve geliştirmek</li>
                <li>Müşteri desteği sunmak ve sorularınıza yanıt vermek</li>
                <li>Kampanyalar, haberler ve promosyonlarla ilgili bilgilendirme yapmak</li>
                <li>Hukuki yükümlülüklere uymak ve güvenlik önlemleri almak</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Çerezler ve Takip Teknolojileri</h2>
            <p className="mb-4">Web sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanmaktadır.</p>
            <ul className="list-disc list-inside mb-4">
                <li>Oturum çerezleri: Geçici çerezler olup, tarayıcınızı kapattığınızda silinir.</li>
                <li>Kalıcı çerezler: Tarayıcınızı kapattıktan sonra belirli bir süre boyunca cihazınızda kalır.</li>
                <li>Üçüncü taraf çerezleri: Reklam ve analiz hizmetleri sunan sağlayıcılar tarafından yerleştirilir.</li>
            </ul>
            <p className="mb-4">Çerezleri tarayıcınızın ayarlarından yönetebilir veya devre dışı bırakabilirsiniz.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Bilgi Paylaşımı</h2>
            <p className="mb-4">Şirketimiz, kullanıcı bilgilerini şu durumlarda üçüncü taraflarla paylaşabilir:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Hukuki gereklilikler doğrultusunda resmi mercilere</li>
                <li>Hizmet sağlayıcılarımızla (barındırma, analiz, pazarlama hizmetleri için)</li>
                <li>İş birleşmeleri veya şirket devri gibi durumlarda</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Güvenlik Önlemleri</h2>
            <p className="mb-4">Bilgilerinizin güvenliği bizim için önemlidir. Bu nedenle:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Veri şifreleme ve güvenli sunucu altyapıları kullanıyoruz.</li>
                <li>Yetkisiz erişimi önlemek için çeşitli güvenlik önlemleri alıyoruz.</li>
                <li>Kişisel verilerin korunması konusunda çalışanlarımızı düzenli olarak eğitiyoruz.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Kullanıcı Hakları</h2>
            <p className="mb-4">Kullanıcılar olarak, aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Kişisel verilerinizin nasıl kullanıldığı hakkında bilgi talep etme</li>
                <li>Veri düzeltme, silme veya işlenmesini durdurma hakkı</li>
                <li>Veri taşınabilirliği talep etme</li>
                <li>Pazarlama amaçlı kullanımlara itiraz etme</li>
            </ul>
            <p className="mb-4">Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Güncellemeler</h2>
            <p className="mb-4">Gizlilik politikamız zaman zaman güncellenebilir. Değişiklikleri takip etmek için bu sayfayı düzenli olarak ziyaret edebilirsiniz.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. İletişim</h2>
            <p className="mb-4">Gizlilik politikamız hakkında sorularınız varsa, aşağıdaki bilgilerle bizimle iletişime geçebilirsiniz:</p>
            <p className="font-semibold">E-posta: <a href="mailto:info@sirketiniz.com" className="text-blue-600">info@sirketiniz.com</a></p>
            <p className="font-semibold">Telefon: <a href="tel:+905555555555" className="text-blue-600">+90 555 555 55 55</a></p>
        </div>
    );
};

export default PrivacyPolicy;
