
Date.prototype['Format'] = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,               //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 
 * 
 *  工具类
 * 
 */
class CasualUtil {

    // private static _interface: CasualUtil = null;

    // public static _getInterface(): CasualUtil {
    //     if (!CasualUtil._interface) CasualUtil._interface = new CasualUtil();
    //     return CasualUtil._interface;
    // }


    // 游戏内吐司对象
    private toastContent: string = '';
    //颜色
    // private color: cc.Color = new cc.Color();

    // //请求失败
    // httpErr(err, callback) {
    //     this.log(err);
    //     //SdkHelper.showToast('网络异常,请检查网络');
    //     SdkHelper.reportData('httpErr', { response: JSON.stringify(err) });
    //     EventMgr.trigger(GameEventType.PAGE_SHOW, { name: 'reconnectPage', data: { callback, err } });
    // }
    // //重连成功
    // reconnectSuc() {
    //     EventMgr.trigger(GameEventType.PAGE_HIDE, 'loadingPage');
    //     EventMgr.trigger(GameEventType.CLOSE_RECONNECT);
    // }
    // //重连失败
    // reconnectFai() {
    //     EventMgr.trigger(GameEventType.PAGE_HIDE, 'loadingPage');
    // }

    /**
     * 
     * @param hexStr 色值
     */
    // getColor(hexStr: string): cc.Color {
    //     if (!hexStr.includes('#')) hexStr = '#' + hexStr;
    //     return this.color.fromHEX(hexStr);
    // }
    /**
     * 整合log release版本return
     * @param data 
     */
    // log(...data: any[]) {
    //     if (HotUpdate.getInstance().isOnlineRelease()) {
    //         return;
    //     }
    //     if (!cc.sys.isBrowser && cc.sys.isNative) {
    //         try {
    //             console.log(GAME_NAME, JSON.stringify(data));
    //         } catch (error) {
    //             console.error(GAME_NAME, error);
    //         }
    //         return;
    //     }
    //     console.log(GAME_NAME, data);
    // }
    // error(...data: any[]) {
    //     if (HotUpdate.getInstance().isOnlineRelease()) {
    //         return;
    //     }
    //     if (cc.sys.isNative) {
    //         try {
    //             console.error(GAME_NAME, JSON.stringify(data));
    //         } catch (error) {
    //             console.error(GAME_NAME, error);
    //         }
    //         return;
    //     }
    //     console.error(GAME_NAME, data);
    // }

    //本地存储
    setLocalData(name: string, value: string) {
        // cc.sys.localStorage.setItem(name, value);
    }
    //获取本地存储
    // getLocalData(name: string): string {
        // return cc.sys.localStorage.getItem(name) || '';
    // }
    //获取随机唯一id
    getRandId() {
        const res = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
        return res;
    }
    //获取时间戳
    getTimeStamp() {
        return Math.floor(Date.now() / 1000);
    }
    /**
     * 
     * 获取是否是全面屏 根据宽高比例
     * true 全面屏
     */
    // isLargeScreen(): boolean {
        // const per = cc.winSize.height / cc.winSize.width;
        // return Number(per.toFixed(2)) > 2;
    // }
    //加载远程资源
    loadRemoteAsset(url: string) {
        // return new Promise((resolve, reject) => {
        //     cc.assetManager.loadRemote(url, (e, res: cc.Asset) => {
        //         if (e) {
        //             console.error(`加载远程资源错误url:${url}`, e);
        //             reject();
        //         }
        //         resolve(res);
        //     });
        // });
    }
    //扣数字
    extractNumbersFromString(input: string): number[] {
        // 使用正则表达式匹配所有的数字序列
        const matches = input.match(/\d+/g);

        // 将匹配结果转换为数字数组
        if (matches) {
        return matches.map(Number);
        } else {
        // 如果没有匹配到数字，返回空数组
        return [];
        }
    }
    //加载远程图片
    loadRemoteImg(url: string) {
        // return new Promise((resolve, reject) => {
        //     cc.assetManager.loadRemote(url, { ext: '.png' }, (e, res: cc.Asset) => {
        //         if (e) {
        //             console.error(`加载远程图片资源错误url:${url}`, e);
        //             reject();
        //         }
        //         resolve(res);
        //     });
        // });
    }
    //加载resource资源
    // loadResourceAsset(url: string): Promise<cc.Asset | null> {
        // return new Promise((resolve, reject) => {
        //     cc.resources.load(url, (e, res: cc.Asset) => {
        //         if (e) {
        //             console.error(`加载resource错误url:${url}`, e);
        //             reject(e);
        //         }
        //         resolve(res);
        //     });
        // });
    // }
    //加载prefab
    // loadBoxsByUrl(url: string): Promise<cc.Prefab | null> {
        // return new Promise((resolve, reject) => {
        //     let base_url = PlayerDataSys.ta_ab != 's0' ? 'boxes/':'boxs/';
        //     cc.loader.loadRes(base_url + url, (err, prefab) => {
        //         if (err) {
        //             console.error(`加载resource错误url:${url}`, err);
        //             reject(err);
        //         }
        //         resolve(prefab);
        //     })
        // })
    // }
    //加载文件所有纹理
    loadFrames(dirName: string) {
        // return new Promise((resolve, reject) => {
        //     if (!dirName) {
        //         resolve([]);
        //         return;
        //     }
        //     cc.resources.loadDir("img/" + dirName, cc.SpriteFrame, (err, data) => {
        //         if (err) {
        //             console.log('manageLoadRes error', err);
        //             return
        //         }
        //         resolve(data);
        //     })
        // })
    }
    //加载纹理
    loadFrame(url: string) {
        // return new Promise<any>((resolve, reject) => {
        //     if (!url) {
        //         resolve(null);
        //         return;
        //     }
        //     cc.loader.loadRes("imgs/" + url, cc.SpriteFrame, (err, data) => {
        //         if (err) {
        //             console.log('manageLoadRes error', err);
        //             return
        //         }
        //         resolve(data);
        //     })
        // })
    }
    //秒数 to 00:00
    formatTime(seconds: number) {
        let min: any = Math.floor((seconds / 60) << 0);
        let sec: any = Math.floor(seconds % 60);
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        return `${min}:${sec}`;
    }

    //秒数 to 00:00:00
    formatHourTime(seconds: number) {
        let hour: any = Math.round((seconds - 30 * 60) / (60 * 60));
        let min: any = Math.round((seconds - 30) / 60) % 60;
        let sec: any = Math.floor(seconds % 60);
        if (hour < 10) hour = '0' + hour;
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;
        return `${hour}:${min}:${sec}`;
    }

    getRandomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //获取进度条宽度
    getProgressWidth(persent: number, min: number, max: number): { width: number, persent: number } {
        let width = Math.ceil(persent * max);
        if (width != 0 && width < min) width = min;
        if (width > max) width = max;
        let num = Math.ceil(persent * 100);
        if (isNaN(num)) num = 1;
        return { width, persent: num };
    }
    //获取以目标点为圆心某个半径上的位置 R半径 angle:角度
    // getPosByRot(R: number, angle: number): cc.Vec2 {
    //     var x = R * Math.cos(2 * Math.PI / 360 * (90 - angle));
    //     var y = R * Math.sin(2 * Math.PI / 360 * (90 - angle));
    //     return cc.v2(x, y);
    // }
    //获取other 相对于point的旋转角度
    // getRotation(point: cc.Vec2, otherPoint: cc.Vec2): number {
    //     let result = 0;
    //     const ditance = point.sub(otherPoint).mag();
    //     const ditanceY = Math.abs(point.y - otherPoint.y);
    //     const rota = Math.asin(ditanceY / ditance) * 57;
    //     if (otherPoint.x > point.x) {
    //         if (otherPoint.y > point.y) {
    //             result = 90 - rota;
    //         } else {
    //             result = 90 + rota;
    //         }
    //     } else {
    //         if (otherPoint.y > point.y) {
    //             result = -(90 - rota);
    //         } else {
    //             result = -(90 + rota);
    //         }
    //     }
    //     if (isNaN(result)) result = 0;
    //     if (0 > result) {
    //         let num = Math.abs(result);
    //         if (num > 90) {
    //             result = 180 - num + 180;
    //         }
    //         result = 90 - num + 270;
    //     }
    //     return this.getRotTo360(result);
    // }
    //转换成360度 
    getRotTo360(rotation: number): number {
        let result = 0;
        if (0 < rotation) {
            result = rotation % 360;
        } else {
            result = 360 - (Math.abs(rotation) % 360);
        }
        if (0 == result) result = 360;
        return result;
    }

    // getDistance(pos1: cc.Vec2, pos2: cc.Vec2) {
    //     return pos1.sub(pos2).mag();
    // }

    //得到分数
    getFormatScore(score) {
        if (score < 1000000) {
            return score;
        }

    }


    getCurrentTime(): string {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    //一天时效的数据
    oneDayLocalStorage(key, num = 0, reset = false) {
        // let st = cc.sys.localStorage.getItem(key);
        // if (st)
        //     st = JSON.parse(st);
        // else
        //     st = {
        //         date: new Date()['Format']("yyyy-MM-dd"),
        //         count: 0
        //     };
        // if (st.count == null) st.count = 0;
        // if (st["date"] == new Date()['Format']("yyyy-MM-dd")) {
        //     st.count += num;
        // } else {
        //     st["date"] = new Date()['Format']("yyyy-MM-dd");
        //     st.count = num;
        // }
        // if (reset) {
        //     st.count = 0;
        // }
        // cc.sys.localStorage.setItem(key, JSON.stringify(st));
        // return st;
    }

    //时间戳 to YYYY-MM-DD   
    /**
     * 
     * @param timestamp 时间戳
     * @param del 分隔符
     */
    formatDate(timestamp: number, del: string = `-`) {
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const mon = date.getMonth() + 1
        const day = date.getDate()
        return `${year}${del}${mon}${del}${day}`
    }
    //时间戳 to YYYY-MM-DD   
    /**
     * 
     * @param timestamp 时间戳
     * @param del 分隔符
     */
    formatDateStr(timestamp: number, yearStr: string = `年`, monStr: string = `月`, dayStr: string = `日`) {
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const mon = date.getMonth() + 1
        const day = date.getDate()
        return `${year}${yearStr}${mon}${monStr}${day}${dayStr}`
    }

    //管理页面toast
    // private manageToast: cc.Prefab = null;
    private manageShows: number = 0;
    showManageViewToast(text: string = '', text2 = "看视频幸苦了") {
        // if (!text) { return }
        // if (this.manageShows > 0) { return }
        // if (this.manageToast) {
        //     const manageToast = cc.instantiate(this.manageToast);
        //     manageToast.getComponent(toast).init(text, text2);
        //     pageMgr.setToastNode(manageToast);
        //     manageToast.zIndex = 888;
        //     this.manageShows++;
        //     manageToast.runAction(cc.sequence(cc.delayTime(2.0), cc.fadeOut(0.3), cc.callFunc(() => {
        //         manageToast.parent = null;
        //         manageToast.destroy();
        //         this.manageShows--;
        //     })))
        // } else {
        //     cc.loader.loadRes('prefabs/toast', cc.Prefab, (err, pre) => {
        //         if (err) { return }
        //         this.manageToast = pre;
        //         this.showManageViewToast(text, text2);
        //     })
        // }
    }


    // private cocosToast3: cc.Prefab = null;
    private lastToast: boolean = false
    showCocosToast3(text: string = '') {
        if (!text || this.lastToast) { return }
        // if (this.cocosToast3) {
        //     const cocosToast = cc.instantiate(this.cocosToast3);
        //     pageMgr.setToastNode(cocosToast);
        //     const textLbl = cocosToast.getChildByName('txt').getComponent(cc.Label);
        //     textLbl.string = text;
        //     cocosToast.zIndex = 888;
        //     cocosToast.scale = 0;
        //     this.lastToast = true;
        //     cocosToast.runAction(cc.sequence(cc.scaleTo(0.2, 1), cc.moveBy(0.4, 0, 48),
        //         cc.callFunc(() => {
        //             this.lastToast = false;
        //         }),
        //         cc.moveBy(0.6, 0, 72),
        //         cc.fadeOut(0.3),
        //         cc.callFunc(() => {
        //             cocosToast.parent = null;
        //             cocosToast.destroy();
        //         })
        //     ))
        // } else {
        //     cc.loader.loadRes('prefabs/cocosToast3', cc.Prefab, (err, pre) => {
        //         if (err) { return }
        //         this.cocosToast3 = pre;
        //         this.showCocosToast3(text);
        //     })
        // }
    }

    //格式化名字
    nameFormat(str) {
        if (!str) { return `用户不存在` }
        let arr = str.split('');
        let len = arr.length;
        let count = 0;
        let name = '';
        let join = '';
        let pattern = new RegExp("[\u4E00-\u9FA5]+");
        for (var i = 0; i < len; i++) {
            var s = arr[i];
            if (pattern.test(s)) {
                count = count + 2;
            } else {
                count++;
            }
            if (count > 10) {
                join = '...';
                break;
            } else {
                name += s;
            }
        }
        return name + join;
    }



    GetChildByName(obj, name, bRecursive) {
        let node = obj.node ? obj.node : obj;
        let child = null;
        if (node && name) {
            child = node.getChildByName(name);
            if (bRecursive) {
                if (!child) {
                    let children = node.children;
                    let childrenCount = node.childrenCount;
                    for (let i = 0; i < childrenCount; ++i) {
                        child = this.GetChildByName(children[i], name, bRecursive);
                        if (child) {
                            break;
                        }
                    }
                }
            }
        }
        return child;
    }
    // setNodeSprieFrame(node: cc.Node, url: string) {
    //     cc.resources.load(url, cc.SpriteFrame, (err, data: cc.SpriteFrame) => {
    //         if (err) {
    //             console.log(err)
    //             return
    //         }
    //         node.getComponent(cc.Sprite).spriteFrame = data;

    //     })
    // }
    /** 加载头像 */
    // loaderHead(headUrl: string, headNode: cc.Node) {
    //     if (!headUrl) { return }
    //     cc.assetManager.loadRemote(headUrl, { ext: '.png' }, (err: Error, texture: cc.Texture2D) => {
    //         if (err) {
    //             cc.log("头像加载失败", err);
    //             return;
    //         }
    //         try {
    //             let head = headNode.getComponent(cc.Sprite);
    //             head.spriteFrame = new cc.SpriteFrame(texture);
    //         } catch (error) {
    //             if (headNode) {
    //                 console.log("?????????????????头像报错了", headNode.name, headNode.parent ? headNode.parent.name : "无parent");
    //             }
    //         }
    //     });
    // }

    /**截取玩家昵称 */
    subUserName(nickName: string, length: number = 8) {
        if (!nickName) { return `用户不存在` }
        if (nickName != "" && nickName.length > length) {
            return nickName.substring(0, length);
        }
        return nickName;
    }

    /** 将十六进制颜色值转换为 cc.Color 对象 */
    hexToColor(hex) {
        // 移除十六进制颜色值的前缀（如果存在）
        hex = hex.replace(/^#/, '');

        // 解析十六进制颜色值
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // 返回 Color 对象
        // return new cc.Color(r, g, b);
    }

    // registerBtnEvent(node: cc.Node, handlerName: string | Function, scope, eventData = "", buttonParam = {}) {
    //     if (!cc.isValid(node)) {
    //         return;
    //     }
    //     if (handlerName) {
    //         handlerName = handlerName["name"] ? handlerName["name"] : handlerName;
    //     }

    //     /**传入匿名函数的情况, 相当于动态在类增加一个方法 */
    //     if (typeof (handlerName) == "function") {
    //         let fnName = "__BtnClick__" + this.randomKey(16);
    //         scope[fnName] = handlerName;
    //         handlerName = fnName;
    //     }

    //     let button: cc.Button = node.getComponent(cc.Button);
    //     if (!button) {
    //         button = node.addComponent(cc.Button);
    //         button.transition = cc.Button.Transition.SCALE;
    //         button.zoomScale = 0.95;
    //         if (buttonParam["isScale"] == false) button.transition = cc.Button.Transition.NONE;
    //     }
    //     if (button && !button.clickEvents[0]) {
    //         let eventHandler = new cc.Component.EventHandler();
    //         eventHandler.target = scope.node;
    //         eventHandler.component = cc.js.getClassName(scope);
    //         eventHandler.handler = handlerName;
    //         eventHandler.customEventData = eventData;
    //         button.clickEvents[0] = eventHandler;
    //         for (const key in buttonParam) {
    //             if (buttonParam.hasOwnProperty(key)) {
    //                 button[key] = buttonParam[key];
    //             }
    //         }
    //     }
    //     node.on("click", () => {
    //         AudioManager.getInstance().playMusic("btntouch")
    //     });
    // }

    /***********************随机数************************/
    randomKey(len) {
        let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let str = "";
        let length = arr.length;
        for (let i = 0; i < len; i++) {
            let pos = this.randomInt(0, length - 1);
            str += arr[pos];
        }
        return str;
    }

    randomInt(min, max?) {
        if (min == max) return min;
        if (!max && max != 0) {
            max = min[1];
            min = min[0];
        }
        let count = Math.floor(Math.random() * (max - min + 1)) + min;
        return count;
    }

    destroyNode(node) {
        // if (!cc.isValid(node)) {
        //     console.error("Tools: destroyNode error, param is invalid");
        //     return;
        // }
        // node.removeFromParent(false);
        // node.destroy();
    }

    // getScript(node: cc.Node) {
    //     if (!node) return null;
    //     //@ts-ignore
    //     let arr = node._components;
    //     for (let i = 0; i < arr.length; i++) {
    //         const element = arr[i];
    //         if (element && arr[i].hasOwnProperty("_super")) {
    //             return arr[i];
    //         }
    //     }
    //     return null;
    // }
    isEmojiCharacter(substring): boolean {
        if (!substring) return false;
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                    return true;
                }
            }
        }
        return false;
    }

    getByWeight_idx(weights) {
        let totalWeight = 0;
        weights.forEach(element => {
            totalWeight += element;
        });
        let rd = Math.random() * totalWeight;
        for (let i = 0, len = weights.length; i < len; ++i) {
            if (rd < weights[i]) {
                return i;
            }
            rd -= weights[i];
        }
        return 0;
    }

    // getConvertToNodePos(node1: cc.Node, node2: cc.Node, rpos: cc.Vec2 = cc.v2(0, 0)) {
    //     const wpos = node1.convertToWorldSpaceAR(rpos)
    //     const pos = node2.convertToNodeSpaceAR(wpos)
    //     return pos;
    // }

    // flyBalanceToTarget(data,start_node?:cc.Node){
    //     const {cash_reward,clear_gold_reward,xc_cash_reward} = data;
    //     let start = null;
    //     if( start_node ){
    //         start = start_node.convertToWorldSpaceAR(cc.v2(0,0));
    //     }

    //     if( cash_reward > 0 || clear_gold_reward > 0 ){
    //         AudioManager.getInstance().playMusic("coin");
    //     }

    //     if(PlayerDataSys.new_subsidy_ab == "s1" && xc_cash_reward>0){
    //         EventMgr.trigger(GameEventType.SHOWEFFECT, {
    //             start, num: 3, type: 0, cb: () => {
    //                 EventMgr.trigger(GameEventType.UPDATE_BALANCE);
    //                 EventMgr.trigger(GameEventType.SHOWBALANCEEFFECT, {type: 0, num: xc_cash_reward})
    //             }
    //         })
    //     }
    //     if(cash_reward > 0){
    //         EventMgr.trigger(GameEventType.SHOWEFFECT, {
    //             start, num: 3, type: 0, cb: () => {
    //                 EventMgr.trigger(GameEventType.UPDATE_BALANCE);
    //                 EventMgr.trigger(GameEventType.SHOWBALANCEEFFECT, {type: 0, num: cash_reward})
    //             }
    //         })
    //     }
    //     if(clear_gold_reward > 0){
    //         EventMgr.trigger(GameEventType.SHOWEFFECT, {
    //             start, num: 3, type: 1, cb: () => {
    //                 EventMgr.trigger(GameEventType.UPDATE_GOLDBALANCE);
    //                 EventMgr.trigger(GameEventType.SHOWBALANCEEFFECT, {type: 1, num: clear_gold_reward})
    //             }
    //         })
    //     }
    // }

    replaceAllOccurrences(input: string, search: string, replacement: string): string {
        // 创建一个正则表达式，使用全局标志 'g'
        const regex = new RegExp(search, 'g');
        return input.replace(regex, replacement);
    }

    //截取一个字符串中的数字
    // 示例用法
    // const str = "hello3world42test7";
    // const numbers = extractNumbers(str);
    // console.log(numbers); // 输出: [3, 42, 7]
    extractNumbers(s: string): number[] {
        // 使用正则表达式匹配所有数字
        const matches = s.match(/\d+/g);
        // 如果匹配到数字，转换为数字数组；否则返回空数组
        return matches ? matches.map(Number) : [];
    }
}
// export default CasualUtil._getInterface();