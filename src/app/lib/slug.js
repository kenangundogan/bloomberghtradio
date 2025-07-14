/**
 * Verilen slug'dan geçerli bir ID ayıklar.
 * Örneğin: "podcast-baslik-12" => "12"
 * @param {string} slug - URL slug'ı
 * @returns {string|null} - Geçerli bir ID ise döner, aksi halde null
 */
export function getIdFromSlug(slug) {
    const parts = slug.split('-');
    const id = parts[parts.length - 1];
    return !isNaN(Number(id)) ? id : null;
}
