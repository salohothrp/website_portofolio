// Data informasi untuk setiap layanan
const modalContent = {
    "Akta Kelahiran": {
        description: "Akta kelahiran adalah dokumen resmi yang mencatat kelahiran seseorang. Diperlukan untuk pendaftaran sekolah dan berbagai keperluan administrasi.",
        requirements: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi KTP orang tua",
            "Surat kelahiran dari rumah sakit",
            "Fotokopi buku nikah orang tua",
            "Formulir permohonan"
        ]
    },
    "Kartu Keluarga": {
        description: "Kartu Keluarga (KK) adalah dokumen yang mencatat susunan anggota keluarga serta informasi penting lainnya.",
        requirements: [
            "Fotokopi Akta Kelahiran anggota keluarga",
            "Fotokopi KTP kepala keluarga",
            "Surat pengantar RT/RW",
            "Formulir permohonan KK"
        ]
    },
    "Kartu Tanda Penduduk": {
        description: "KTP adalah identitas resmi warga negara Indonesia yang wajib dimiliki oleh setiap penduduk yang telah berusia 17 tahun.",
        requirements: [
            "Fotokopi Kartu Keluarga",
            "Surat pengantar RT/RW",
            "Fotokopi Akta Kelahiran",
            "Pas foto 3x4 sebanyak 2 lembar"
        ]
    },
    "Akta Kematian": {
        description: "Akta kematian adalah dokumen yang diterbitkan untuk mencatat kematian seseorang.",
        requirements: [
            "Fotokopi Kartu Keluarga almarhum",
            "Fotokopi KTP almarhum",
            "Surat keterangan kematian dari rumah sakit",
            "Surat pengantar RT/RW"
        ]
    },
    "Surat Pindah": {
        description: "Surat pindah digunakan sebagai bukti resmi bahwa seseorang telah berpindah tempat tinggal ke wilayah administratif yang berbeda.",
        requirements: [
            "Fotokopi Kartu Keluarga",
            "Fotokopi KTP",
            "Surat pengantar RT/RW",
            "Formulir permohonan pindah"
        ]
    }
};

function openModal(title) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = modalContent[title].description;

    let requirementList = document.getElementById("modalRequirements");
    requirementList.innerHTML = "";
    modalContent[title].requirements.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        requirementList.appendChild(li);
    });

    document.getElementById("popupModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("popupModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("popupModal");
    if (event.target === modal) {
        closeModal();
    }
}