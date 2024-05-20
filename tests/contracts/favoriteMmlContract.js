const itActsAsFavoriteRestoMmlModel = (favoriteRestoMml) => {
  it('seharusnya menambahkan restoran yang telah ditambahkan', async () => {
    favoriteRestoMml.putRestoMml({ id: 1 });
    favoriteRestoMml.putRestoMml({ id: 2 });

    expect(await favoriteRestoMml.getRestoMml(1)).toEqual({ id: 1 });
    expect(await favoriteRestoMml.getRestoMml(2)).toEqual({ id: 2 });
    expect(await favoriteRestoMml.getRestoMml(3)).toEqual(undefined);
  });

  it('seharusnya mencegah restoran tersebut bisa tertambah jika ia tidak mempunyai properti yang benar', async () => {
    favoriteRestoMml.putRestoMml({ aProperty: 'property' });

    expect(await favoriteRestoMml.getAllRestoMml()).toEqual([]);
  });

  it('dapat mengembalikan semua restoran yang sudah ditambahkan', async () => {
    favoriteRestoMml.putRestoMml({ id: 1 });
    favoriteRestoMml.putRestoMml({ id: 2 });

    expect(await favoriteRestoMml.getAllRestoMml()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('seharusnya bisa menghapus restoran favorit', async () => {
    favoriteRestoMml.putRestoMml({ id: 1 });
    favoriteRestoMml.putRestoMml({ id: 2 });
    favoriteRestoMml.putRestoMml({ id: 3 });

    await favoriteRestoMml.deleteRestoMml(1);

    expect(await favoriteRestoMml.getAllRestoMml()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('seharusnya mampu meng-handle permintaan untuk menghapus restoran walaupun restorannya belum ditambahkan', async () => {
    favoriteRestoMml.putRestoMml({ id: 1 });
    favoriteRestoMml.putRestoMml({ id: 2 });
    favoriteRestoMml.putRestoMml({ id: 3 });

    await favoriteRestoMml.deleteRestoMml(4);

    expect(await favoriteRestoMml.getAllRestoMml()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestoMml.putRestoMml({ id: 1, name: 'resto a' });
    favoriteRestoMml.putRestoMml({ id: 2, name: 'resto b' });
    favoriteRestoMml.putRestoMml({ id: 3, name: 'resto abc' });
    favoriteRestoMml.putRestoMml({ id: 4, name: 'ini pasti resto abcd' });

    expect(await favoriteRestoMml.searchRestoMmls('resto a')).toEqual([
      { id: 1, name: 'resto a' },
      { id: 3, name: 'resto abc' },
      { id: 4, name: 'ini pasti resto abcd' },
    ]);
  });
};

export { itActsAsFavoriteRestoMmlModel };
