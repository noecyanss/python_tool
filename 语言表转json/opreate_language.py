import xlrd, json

# data1 = xlrd.open_workbook(r'D:\tool\python打包Excel\language.xls')
data1 = xlrd.open_workbook(r'C:\Other\excel转json\excel转json\KnifeJam语言表.xlsx')

def client():
    client_data = data1.sheet_by_name("B面")

    keys = client_data.col_values(1, 2)

    json_data = {}

    start_col = 2
    col_nums = len(client_data.row_values(0))
    while start_col < col_nums:
        json_data[client_data.cell_value(1, start_col)] = {}
        for index, v in enumerate(client_data.col_values(start_col, 2)):
            json_data[client_data.cell_value(1, start_col)][keys[index]] = v.replace("\\n","\n")
        start_col += 1
    # print( open("language.json", "w"))
    json.dump(json_data, open("language.json", "w",encoding="utf-8"), indent=4, ensure_ascii=False)


def name():
    client_data = data1.sheet_by_name("name")

    json_data = {}

    start_col = 1
    col_nums = len(client_data.row_values(0))
    while start_col < col_nums:
        json_data[client_data.cell_value(1, start_col)] = []
        for index, v in enumerate(client_data.col_values(start_col, 3)):
            json_data[client_data.cell_value(1, start_col)].append(v.replace("\\n", "\n"))
        start_col += 1

    json.dump(json_data, open("name.json", "w",encoding="utf-8"), indent=4, ensure_ascii=False)


client()
# name()
