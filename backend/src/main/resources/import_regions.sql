do $$    declare        country_id integer;    begin  select country.id into country_id      from country WHERE country.name = 'Russian Federation (the)'; INSERT INTO region (name, code, "country_id") VALUES ('Adygea, Republic of', '01', country_id),        ('Bashkortostan, Republic of', '02', country_id),        ('Buryatia, Republic of', '03', country_id),        ('Altai Republic', '04', country_id),        ('Dagestan, Republic of', '05', country_id),        ('Ingushetia, Republic of', '06', country_id),        ('Kabardino-Balkar Republic', '07', country_id),        ('Kalmykia, Republic of', '08', country_id),        ('Karachay-Cherkess Republic', '09', country_id),        ('Karelia, Republic of', '10', country_id),        ('Komi Republic', '11', country_id),        ('Mari El Republic', '12', country_id),        ('Mordovia, Republic of', '13', country_id),        ('Sakha (Yakutia) Republic', '14', country_id),        ('North Ossetia-Alania, Republic of', '15', country_id),        ('Tatarstan, Republic of', '16', country_id),        ('Tuva Republic', '17', country_id),        ('Udmurt Republic', '18', country_id),        ('Khakassia, Republic of', '19', country_id),        ('Chechen Republic', '20', country_id),        ('Chuvash Republic', '21', country_id),        ('Altai Krai', '22', country_id),        ('Krasnodar Krai', '23', country_id),        ('Krasnoyarsk Krai', '24', country_id),        ('Primorsky Krai', '25', country_id),        ('Stavropol Krai', '26', country_id),        ('Khabarovsk Krai', '27', country_id),        ('Amur Oblast', '28', country_id),        ('Arkhangelsk Oblast', '29', country_id),        ('Astrakhan Oblast', '30', country_id),        ('Belgorod Oblast', '31', country_id),        ('Bryansk Oblast', '32', country_id),        ('Vladimir Oblast', '33', country_id),        ('Volgograd Oblast', '34', country_id),        ('Vologda Oblast', '35', country_id),        ('Voronezh Oblast', '36', country_id),        ('Ivanovo Oblast', '37', country_id),        ('Irkutsk Oblast', '38', country_id),        ('Kaliningrad Oblast', '39', country_id),        ('Kaluga Oblast', '40', country_id),        ('Kamchatka Krai', '41', country_id),        ('Kemerovo Oblast', '42', country_id),        ('Kirov Oblast', '43', country_id),        ('Kostroma Oblast', '44', country_id),        ('Kurgan Oblast', '45', country_id),        ('Kursk Oblast', '46', country_id),        ('Leningrad Oblast', '47', country_id),        ('Lipetsk Oblast', '48', country_id),        ('Magadan Oblast', '49', country_id),        ('Moscow Oblast', '50', country_id),        ('Murmansk Oblast', '51', country_id),        ('Nizhny Novgorod Oblast', '52', country_id),        ('Novgorod Oblast', '53', country_id),        ('Novosibirsk Oblast', '54', country_id),        ('Omsk Oblast', '55', country_id),        ('Orenburg Oblast', '56', country_id),        ('Oryol Oblast', '57', country_id),        ('Penza Oblast', '58', country_id),        ('Perm Krai', '59', country_id),        ('Pskov Oblast', '60', country_id),        ('Rostov Oblast', '61', country_id),        ('Ryazan Oblast', '62', country_id),        ('Samara Oblast', '63', country_id),        ('Saratov Oblast', '64', country_id),        ('Sakhalin Oblast', '65', country_id),        ('Sverdlovsk Oblast', '66', country_id),        ('Smolensk Oblast', '67', country_id),        ('Tambov Oblast', '68', country_id),        ('Tver Oblast', '69', country_id),        ('Tomsk Oblast', '70', country_id),        ('Tula Oblast', '71', country_id),        ('Tyumen Oblast', '72', country_id),        ('Ulyanovsk Oblast', '73', country_id),        ('Chelyabinsk Oblast', '74', country_id),        ('Zabaykalsky Krai', '75', country_id),        ('Yaroslavl Oblast', '76', country_id),        ('Moscow', '77', country_id),        ('Saint Petersburg', '78', country_id),        ('Jewish Autonomous Oblast', '79', country_id),        ('Nenets Autonomous Okrug', '80', country_id),        ('Khanty–Mansi Autonomous Okrug – Yugra', '81', country_id),        ('Chukotka Autonomous Okrug', '82', country_id),        ('Yamalo-Nenets Autonomous Okrug', '83', country_id),        ('Republic of Crimea', '84', country_id),        ('Sevastopol', '85', country_id);    end;$$