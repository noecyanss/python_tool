import requests
import os

# 替换为你的 TinyPNG API 密钥
API_KEY = 'ZH2pFnWzQQkzTllqR2RDLFhl7LjBxdwk'

def compress_image(input_filepath, output_filepath):
    url = 'http://api.tinify.com/shrink'
    
    with open(input_filepath, 'rb') as image_file:
        response = requests.post(
            url,
            auth=('api', API_KEY),
            data=image_file
        )

    if response.status_code == 201:
        # 获取压缩后的图片 URL
        result_url = response.json()['output']['url']
        
        # 下载压缩后的图片
        compressed_response = requests.get(result_url)

        # 保存压缩后的图片
        with open(output_filepath, 'wb') as out_file:
            out_file.write(compressed_response.content)

        print(f'图片已压缩并保存为: {output_filepath}')
    else:
        print(f'压缩失败: {response.status_code} {response.text}')

def process_directory(directory):
    # 定义支持的图片扩展名
    supported_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff')

    # 遍历目录中的所有文件和子目录
    for root, dirs, files in os.walk(directory):
        # 如果是根目录，创建一个 'compressed_images' 文件夹
        if root == directory:
            output_directory = os.path.join(root, os.path.basename(root))
        else:
            # 对于子目录，创建一个与子目录名相同的文件夹
            output_directory = os.path.join(root, os.path.basename(root))
        
        os.makedirs(output_directory, exist_ok=True)

        for filename in files:
            if filename.lower().endswith(supported_extensions):
                input_image_path = os.path.join(root, filename)
                
                # 获取原图片的名称和扩展名
                image_name, image_extension = os.path.splitext(filename)
                
                # 输出图片的路径，保持原名称和扩展名
                output_image_path = os.path.join(output_directory, f'{image_name}{image_extension}')
                
                # 压缩图片
                compress_image(input_image_path, output_image_path)

if __name__ == '__main__':
    # 获取当前脚本目录
    current_directory = os.path.dirname(os.path.abspath(__file__))
    
    # 处理当前目录及其所有子目录
    process_directory(current_directory)
    
    # 打印完成信息
    print('所有图片已压缩完成。')
