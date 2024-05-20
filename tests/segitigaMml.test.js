const mendeteksiSegitiga = (sisiQ, sisiV, sisiJ) => {
  [sisiQ, sisiV, sisiJ].forEach((sisi) => {
    if (!Number.isInteger(sisi)) {
      throw new Error('Sisi harus dalam Integer');
    }

    if (sisi < 1) {
      throw new Error('Segitiga yang aneh');
    }
  });

  [sisiQ, sisiV, sisiJ] = [sisiQ, sisiV, sisiJ]
    .map((sisi) => {
      if (!Number.isInteger(sisi)) {
        throw new Error('Sisi harus dalam Integer');
      }

      if (sisi < 1) {
        throw new Error('Segitiga yang aneh');
      }

      return sisi;
    })
    .sort();

  if (sisiQ + sisiV <= sisiJ) {
    throw new Error('Segitiga tidak sesuai dengan prinsip inequality');
  }

  if (sisiQ === sisiV && sisiQ === sisiJ) {
    return 'Segitiga Sama Sisi';
  }

  if (sisiQ === sisiV || sisiV === sisiJ) {
    return 'Segitiga Sama Kaki';
  }

  return 'Segitiga Sembarang';
};

describe('Deteksi segitiganya', () => {
  it('Seharusnya gagal jika sisi kurang dari 1', () => {
    expect(() => mendeteksiSegitiga(-1, 2, 2)).toThrowError(
      'Segitiga yang aneh'
    );
    expect(() => mendeteksiSegitiga(1, -2, 2)).toThrowError(
      'Segitiga yang aneh'
    );
    expect(() => mendeteksiSegitiga(1, 2, -2)).toThrowError(
      'Segitiga yang aneh'
    );
  });

  it('Seharusnya gagal jika sisi bukan integer', () => {
    expect(() => mendeteksiSegitiga('a', 2, 2)).toThrowError(
      'Sisi harus dalam Integer'
    );
    expect(() => mendeteksiSegitiga(1, 'a', 2)).toThrowError(
      'Sisi harus dalam Integer'
    );
    expect(() => mendeteksiSegitiga(1, 2, 'a')).toThrowError(
      'Sisi harus dalam Integer'
    );

    expect(() => mendeteksiSegitiga(' ', 2, 2)).toThrowError(
      'Sisi harus dalam Integer'
    );
  });

  it('Seharusnya mendeteksi permasalahan inequality', () => {
    expect(() => mendeteksiSegitiga(4, 1, 2)).toThrowError(
      'Segitiga tidak sesuai dengan prinsip inequality'
    );
    expect(() => mendeteksiSegitiga(5, 1, 3)).toThrowError(
      'Segitiga tidak sesuai dengan prinsip inequality'
    );
  });

  it('Seharusnya terdeteksi Segitiga Sama Sisi jika semua sisi sama', () => {
    expect(mendeteksiSegitiga(1, 1, 1)).toEqual('Segitiga Sama Sisi');
    expect(mendeteksiSegitiga(1, 2, 2)).not.toEqual('Segitiga Sama Sisi');
  });

  it('Seharusnya terdeteksi Segitiga Sama Kaki jika hanya ada dua sisi yang sama', () => {
    expect(mendeteksiSegitiga(2, 2, 3)).toEqual('Segitiga Sama Kaki');
    expect(mendeteksiSegitiga(4, 2, 4)).toEqual('Segitiga Sama Kaki');
    expect(mendeteksiSegitiga(1, 2, 2)).toEqual('Segitiga Sama Kaki');

    expect(mendeteksiSegitiga(4, 1, 4)).toEqual('Segitiga Sama Kaki');
  });

  it('Seharusnya terdeteksi Segitiga Sembarang jika tidak ada sisi yang sama', () => {
    expect(mendeteksiSegitiga(2, 4, 3)).toEqual('Segitiga Sembarang');
  });
});
