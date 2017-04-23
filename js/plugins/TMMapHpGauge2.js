//=============================================================================
// TMPlugin - マップＨＰゲージ
// バージョン: 1.1.0
// 最終更新日: 2016/10/20
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc マップシーンに顔グラフィックとＨＰゲージを表示します。
 * 必要に応じてＭＰや変数などをゲージで表示することもできます。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param gaugeWindowX
 * @desc ＨＰゲージウィンドウのＸ座標
 * 初期値: 0
 * @default 0
 *
 * @param gaugeWindowY
 * @desc ＨＰゲージウィンドウのＹ座標
 * 初期値: 0
 * @default 0
 *
 * @param gaugeWindowWidth
 * @desc ＨＰゲージウィンドウの幅
 * 初期値: 288
 * @default 288
 *
 * @param gaugeWindowHeight
 * @desc ＨＰゲージウィンドウの高さ
 * 初期値: 64
 * @default 64
 *
 * @param gaugeAType
 * @desc ゲージＡのタイプ（HP / MP / TP / VN）
 * 初期値: HP
 * @default HP
 *
 * @param gaugeAX
 * @desc ゲージＡのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeAY
 * @desc ゲージＡのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeAWidth
 * @desc ゲージＡの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeAHeight
 * @desc ゲージＡの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeAFontSize
 * @desc ゲージＡのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeAParam
 * @desc ゲージＡのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeAMax
 * @desc ゲージＡのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeAName
 * @desc ゲージＡのタイプが VN のときに表示するパラメータ名
 * 初期値: AP
 * @default AP
 *
 * @param gaugeAColor
 * @desc ゲージＡのタイプが VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 *
 * @param gaugeBType
 * @desc ゲージＢのタイプ（HP / MP / TP / VN）
 * 初期値: 
 * @default 
 *
 * @param gaugeBX
 * @desc ゲージＢのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeBY
 * @desc ゲージＢのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeBWidth
 * @desc ゲージＢの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeBHeight
 * @desc ゲージＢの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeBFontSize
 * @desc ゲージＢのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeBParam
 * @desc ゲージＢのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeBMax
 * @desc ゲージＢのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeBName
 * @desc ゲージＢのタイプが VN のときに表示するパラメータ名
 * 初期値: BP
 * @default BP
 *
 * @param gaugeBColor
 * @desc ゲージＢのタイプが VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 *
 * @param gaugeCType
 * @desc ゲージＣのタイプ（HP / MP / TP / VN）
 * 初期値: 
 * @default 
 *
 * @param gaugeCX
 * @desc ゲージＣのＸ座標（ウィンドウ内の左端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeCY
 * @desc ゲージＣのＹ座標（ウィンドウ内の上端が 0 ）
 * 初期値: 12
 * @default 12
 *
 * @param gaugeCWidth
 * @desc ゲージＣの長さ
 * 初期値: 144
 * @default 144
 *
 * @param gaugeCHeight
 * @desc ゲージＣの表示領域（数値とゲージ合わせて）の高さ
 * 初期値: 36
 * @default 36
 *
 * @param gaugeCFontSize
 * @desc ゲージＣのフォントサイズ
 * 初期値: 28
 * @default 28
 *
 * @param gaugeCParam
 * @desc ゲージＣのタイプが VN のときに現在値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeCMax
 * @desc ゲージＣのタイプが VN のときに最大値とするゲーム変数番号
 * 初期値: 0
 * @default 0
 *
 * @param gaugeCName
 * @desc ゲージＣのタイプが VN のときに表示するパラメータ名
 * 初期値: CP
 * @default CP
 *
 * @param gaugeCColor
 * @desc ゲージＣのタイプが VN のときのゲージカラー
 * 初期値: #ff60c0 #ffa0e0
 * @default #ff60c0 #ffa0e0
 *
 * @param faceOffsetX
 * @desc 顔グラフィックのＸ座標補正値
 * 初期値: -4
 * @default -4
 *
 * @param faceOffsetY
 * @desc 顔グラフィックのＹ座標補正値
 * 初期値: -4
 * @default -4
 *
 * @param stateIconMax
 * @desc ステートアイコンを表示する個数
 * 初期値: 4
 * @default 4
 *
 * @param stateIconX
 * @desc ステートアイコンのＸ座標
 * 初期値: 156
 * @default 156
 *
 * @param stateIconY
 * @desc ステートアイコンのＹ座標
 * 初期値: 24
 * @default 24
 *
 * @param goldWidth
 * @desc 所持金表示の幅
 * 初期値: 0 ( 0 で非表示 )
 * @default 0
 *
 * @param goldX
 * @desc 所持金表示のＸ座標
 * 初期値: 12
 * @default 12
 *
 * @param goldY
 * @desc 所持金表示のＹ座標
 * 初期値: 12
 * @default 12
 *
 * @param shakeTime
 * @desc ダメージを受けたときにウィンドウを揺らす時間（フレーム）
 * 初期値: 20 ( 0 で揺らさない )
 * @default 20
 *
 * @param startVisible
 * @desc ゲーム開始時の表示状態
 * 初期値: 1（ 0 で非表示 / 1 で表示）
 * @default 1
 *
 * @param windowOpacity
 * @desc ＨＰゲージウィンドウの不透明度
 * 初期値: 255
 * @default 255
 *
 * @param collideOpacity
 * @desc プレイヤーと重なったときの不透明度
 * 初期値: 128（ 0 ～ 255 ）
 * @default 128
 *
 * @param messageBusyHide
 * @desc メッセージウィンドウ表示中はログウィンドウを隠す
 * 初期値: 1（ 0 で隠さない / 1 で隠す）
 * @default 1
 *
 * @param eventBusyHide
 * @desc イベント起動中はログウィンドウを隠す
 * 初期値: 1（ 0 で隠さない / 1 で隠す）
 * @default 1
 *
 * @help
 * 使い方:
 *
 *   プラグインパラメータをいじってお好みのＨＰゲージを表示してください。
 *
 *   このプラグインは RPGツクールMV Version 1.3.0 で動作確認をしています。
 *
 *
 * プラグインコマンド:
 *
 *   showHpGauge
 *     ＨＰゲージを表示します。プラグインパラメータ startVisible が 0 の場合、
 *     このコマンドが実行されるまでＨＰゲージは表示されません。
 *
 *   hideHpGauge
 *     ＨＰゲージを隠します。showHpGauge コマンドが実行されるまで
 *     表示されないままです。
 *
 *
 * プラグインパラメータ補足:
 *
 *   gaugeAParam / gaugeBParam / gaugeCParam
 *     ゲージのタイプが VN の場合に、ゲージの現在値として扱うゲーム変数番号を
 *     設定してください。
 *
 *   gaugeAMax / gaugeBMax / gaugeCMax
 *     ゲージのタイプが VN の場合に、ゲージの最大値として扱うゲーム変数番号を
 *     指定してください。 これらのパラメータに設定した番号のゲーム変数に
 *     値を代入することで、初めて最大値として機能します。
 */

var Imported = Imported || {};
Imported.TMMapHpGauge2 = true;

var TMPlugin = TMPlugin || {};
TMPlugin.MapHpGauge2 = {};
TMPlugin.MapHpGauge2.Parameters = PluginManager.parameters('TMMapHpGauge2');
TMPlugin.MapHpGauge2.WindowX      = +(TMPlugin.MapHpGauge2.Parameters['gaugeWindowX'] || 0);
TMPlugin.MapHpGauge2.WindowY      = +(TMPlugin.MapHpGauge2.Parameters['gaugeWindowY'] || 0);
TMPlugin.MapHpGauge2.WindowWidth  = +(TMPlugin.MapHpGauge2.Parameters['gaugeWindowWidth'] || 288);
TMPlugin.MapHpGauge2.WindowHeight = +(TMPlugin.MapHpGauge2.Parameters['gaugeWindowHeight'] || 64);
TMPlugin.MapHpGauge2.GaugeA = {type: TMPlugin.MapHpGauge2.Parameters['gaugeAType'],
                              x: +(TMPlugin.MapHpGauge2.Parameters['gaugeAX'] || 12),
                              y: +(TMPlugin.MapHpGauge2.Parameters['gaugeAY'] || 12),
                              width: +(TMPlugin.MapHpGauge2.Parameters['gaugeAWidth'] || 144),
                              height: +(TMPlugin.MapHpGauge2.Parameters['gaugeAHeight'] || 36),
                              fontSize: +(TMPlugin.MapHpGauge2.Parameters['gaugeAFontSize'] || 28),
                              param: +(TMPlugin.MapHpGauge2.Parameters['gaugeAParam'] || 0),
                              max: +(TMPlugin.MapHpGauge2.Parameters['gaugeAMax'] || 0),
                              name: TMPlugin.MapHpGauge2.Parameters['gaugeAName'],
                              color: (TMPlugin.MapHpGauge2.Parameters['gaugeAColor'] || '#ff60c0 #ffa0e0').split(' ')};
TMPlugin.MapHpGauge2.GaugeB = {type: TMPlugin.MapHpGauge2.Parameters['gaugeBType'],
                              x: +(TMPlugin.MapHpGauge2.Parameters['gaugeBX'] || 12),
                              y: +(TMPlugin.MapHpGauge2.Parameters['gaugeBY'] || 12),
                              width: +(TMPlugin.MapHpGauge2.Parameters['gaugeBWidth'] || 144),
                              height: +(TMPlugin.MapHpGauge2.Parameters['gaugeBHeight'] || 36),
                              fontSize: +(TMPlugin.MapHpGauge2.Parameters['gaugeBFontSize'] || 28),
                              param: +(TMPlugin.MapHpGauge2.Parameters['gaugeBParam'] || 0),
                              max: +(TMPlugin.MapHpGauge2.Parameters['gaugeBMax'] || 0),
                              name: TMPlugin.MapHpGauge2.Parameters['gaugeBName'],
                              color: (TMPlugin.MapHpGauge2.Parameters['gaugeBColor'] || '#ff60c0 #ffa0e0').split(' ')};
TMPlugin.MapHpGauge2.GaugeC = {type: TMPlugin.MapHpGauge2.Parameters['gaugeCType'],
                              x: +(TMPlugin.MapHpGauge2.Parameters['gaugeCX'] || 12),
                              y: +(TMPlugin.MapHpGauge2.Parameters['gaugeCY'] || 12),
                              width: +(TMPlugin.MapHpGauge2.Parameters['gaugeCWidth'] || 144),
                              height: +(TMPlugin.MapHpGauge2.Parameters['gaugeCHeight'] || 36),
                              fontSize: +(TMPlugin.MapHpGauge2.Parameters['gaugeCFontSize'] || 28),
                              param: +(TMPlugin.MapHpGauge2.Parameters['gaugeCParam'] || 0),
                              max: +(TMPlugin.MapHpGauge2.Parameters['gaugeCMax'] || 0),
                              name: TMPlugin.MapHpGauge2.Parameters['gaugeCName'],
                              color: (TMPlugin.MapHpGauge2.Parameters['gaugeCColor'] || '#ff60c0 #ffa0e0').split(' ')};
TMPlugin.MapHpGauge2.Gauges2 = [TMPlugin.MapHpGauge2.GaugeA, TMPlugin.MapHpGauge2.GaugeB,
                              TMPlugin.MapHpGauge2.GaugeC];
TMPlugin.MapHpGauge2.FaceOffsetX     = +(TMPlugin.MapHpGauge2.Parameters['faceOffsetX'] || -4);
TMPlugin.MapHpGauge2.FaceOffsetY     = +(TMPlugin.MapHpGauge2.Parameters['faceOffsetY'] || -4);
TMPlugin.MapHpGauge2.StateIconMax    = +(TMPlugin.MapHpGauge2.Parameters['stateIconMax'] || 4);
TMPlugin.MapHpGauge2.StateIconX      = +(TMPlugin.MapHpGauge2.Parameters['stateIconX'] || 156);
TMPlugin.MapHpGauge2.StateIconY      = +(TMPlugin.MapHpGauge2.Parameters['stateIconY'] || 24);
TMPlugin.MapHpGauge2.GoldWidth       = +(TMPlugin.MapHpGauge2.Parameters['goldWidth'] || 0);
TMPlugin.MapHpGauge2.GoldX           = +(TMPlugin.MapHpGauge2.Parameters['goldX'] || 0);
TMPlugin.MapHpGauge2.GoldY           = +(TMPlugin.MapHpGauge2.Parameters['goldY'] || 0);
TMPlugin.MapHpGauge2.ShakeTime       = +(TMPlugin.MapHpGauge2.Parameters['shakeTime'] || 20);
TMPlugin.MapHpGauge2.CollideOpacity  = +(TMPlugin.MapHpGauge2.Parameters['collideOpacity'] || 128);
TMPlugin.MapHpGauge2.StartVisible    = TMPlugin.MapHpGauge2.Parameters['startVisible'] === '1';
TMPlugin.MapHpGauge2.WindowOpacity   = +(TMPlugin.MapHpGauge2.Parameters['windowOpacity'] || 255);
TMPlugin.MapHpGauge2.MessageBusyHide = TMPlugin.MapHpGauge2.Parameters['messageBusyHide'] === '1';
TMPlugin.MapHpGauge2.EventBusyHide   = TMPlugin.MapHpGauge2.Parameters['eventBusyHide'] === '1';

(function() {

  //-----------------------------------------------------------------------------
  // Game_System
  //

  Game_System.prototype.isVisibleMapHpGauge = function() {
    if (this._visibleMapHpGauge == null) {
      this._visibleMapHpGauge = TMPlugin.MapHpGauge2.StartVisible;
    }
    return this._visibleMapHpGauge;
  };
  
  Game_System.prototype.setVisibleMapHpGauge = function(flag) {
    this._visibleMapHpGauge = flag;
  };

  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'showHpGauge') {
      $gameSystem.setVisibleMapHpGauge(true);
    } else if (command === 'hideHpGauge') {
      $gameSystem.setVisibleMapHpGauge(false);
    }
  };

  //-----------------------------------------------------------------------------
  // Window_MapHpGauge
  //

  function Window_MapHpGauge2() {
    this.initialize.apply(this, arguments);
  }

  Window_MapHpGauge2.prototype = Object.create(Window_Base.prototype);
  Window_MapHpGauge2.prototype.constructor = Window_MapHpGauge2;

  Window_MapHpGauge2.prototype.initialize = function() {
    var x      = TMPlugin.MapHpGauge2.WindowX;
    var y      = TMPlugin.MapHpGauge2.WindowY;
    var wight  = TMPlugin.MapHpGauge2.WindowWidth;
    var height = TMPlugin.MapHpGauge2.WindowHeight;
    Window_Base.prototype.initialize.call(this, x, y, wight, height);
    this.openness = $gameSystem.isVisibleMapHpGauge() ? 255 : 0;
    this.opacity = TMPlugin.MapHpGauge2.WindowOpacity;
    this.contentsOpacity = 255;
    this._gaugeParams2 = [];
    for (var i = 0; i < 3; i++) {
      var gaugeParam2 = {param: -1, max: -1};
      this._gaugeParams2.push(gaugeParam2);
    }
    this._icons = [];
    this._gold = 0;
    this._actorId = -1;
    this._shakeDuration = 0;
    this._baseX = x;
    this._needFaceRefresh = false;
    this._hideCount = 0;
    this.refresh();
  };

  Window_MapHpGauge2.prototype.lineHeight = function() {
    return this._lineHeight || 36;
  };

  // 標準パディングを取得
  Window_MapHpGauge2.prototype.standardPadding = function() {
    return 0;
  };

  // フレーム更新
  Window_MapHpGauge2.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.updateVisibility()) {
      this.open();
      if (this._needFaceRefresh) this.refreshFace();
      var needRefresh = this.isNeedRefresh()
      if (needRefresh) {
        var actor = $gameParty.leader();
        if (needRefresh === 'SHAKE') this._shakeDuration = TMPlugin.MapHpGauge2.ShakeTime;
        for (var i = 0; i < 3; i++) {
          var gauge2 = TMPlugin.MapHpGauge2.Gauges2[i]
          if (gauge2.type === 'HP') {
            this._gaugeParams2[i].param = actor.hp;
            this._gaugeParams2[i].max = actor.mhp;
          } else if (gauge2.type === 'MP') {
            this._gaugeParams2[i].param = actor.mp;
            this._gaugeParams2[i].max = actor.mmp;
          } else if (gauge2.type === 'TP') {
            this._gaugeParams2[i].param = actor.tp;
            this._gaugeParams2[i].max = actor.maxTp();
          } else if (gauge2.type === 'VN') {
            this._gaugeParams2[i].param = $gameVariables.value(gauge2.param);
            this._gaugeParams2[i].max = $gameVariables.value(gauge2.max);
          }
        }
        this._icons = actor.stateIcons().concat(actor.buffIcons());
        this._gold = $gameParty.gold();
        this._actorId = actor.actorId();
        this.refresh();
      }
      if (this._shakeDuration > 0) {
        this._shakeDuration--;
        this.x = this._baseX;
        if (this._shakeDuration > 0) {
          this.x += Math.floor(Math.sin((this._shakeDuration % 10) * Math.PI / 5) * 8);
        }
      }
      this.updateOpacity();
    } else {
      this.close();
    }
  };

  Window_MapHpGauge2.prototype.updateVisibility = function() {
    if (!$gameSystem.isVisibleMapHpGauge()) return false;
    if ((TMPlugin.MapHpGauge2.EventBusyHide && $gameMap.isEventRunning()) ||
        (TMPlugin.MapHpGauge2.MessageBusyHide && $gameMessage.isBusy())) {
      this._hideCount++;
    } else {
      this._hideCount = 0;
    }
    return this._hideCount < 10 && $gameParty.leader();
  };

  // リフレッシュが必要かどうかを返す
  Window_MapHpGauge2.prototype.isNeedRefresh = function() {
    var actor = $gameParty.leader();
    if (actor) {
      if (this._actorId !== actor.actorId()) return true;
      for (var i = 0; i < 3; i++) {
        var gauge2 = TMPlugin.MapHpGauge2.Gauges2[i];
        var gaugeParam2 = this._gaugeParams2[i];
        if (gauge2.type === 'HP') {
          if (gaugeParam2.param !== actor.hp || gaugeParam2.max !== actor.mhp) {
            return gaugeParam2.param > actor.hp ? 'SHAKE' : true;
          }
        } else if (gauge2.type === 'MP') {
          if (gaugeParam2.param !== actor.mp || gaugeParam2.max !== actor.mmp) {
            return true;
          }
        } else if (gauge2.type === 'TP') {
          if (gaugeParam2.param !== actor.tp || gaugeParam2.max !== actor.maxTp()) {
            return true;
          }
        } else if (gauge2.type === 'VN') {
          if (gaugeParam2.param !== $gameVariables.value(gauge2.param) ||
              gaugeParam2.max !== $gameVariables.value(gauge2.max)) {
            return true;
          }
        }
      }
      if (TMPlugin.MapHpGauge2.StateIconMax > 0) {
        var icons = actor.stateIcons().concat(actor.buffIcons());
        if (this._icons.toString() !== icons.toString()) return true;
      }
      if (TMPlugin.MapHpGauge2.GoldWidth > 0) {
        if (this._gold !== $gameParty.gold()) return true;
      }
    }
    return false;
  };

  // 不透明度の更新
  Window_MapHpGauge2.prototype.updateOpacity = function() {
    if (this.x < $gamePlayer.screenX() + 24 &&
        this.x + TMPlugin.MapHpGauge2.WindowWidth > $gamePlayer.screenX() - 24 &&
        this.y < $gamePlayer.screenY() &&
        this.y + TMPlugin.MapHpGauge2.WindowHeight > $gamePlayer.screenY() - 48) {
      this.opacity = TMPlugin.MapHpGauge2.CollideOpacity;
      this.contentsOpacity = this.opacity;
    } else {
      this.opacity = TMPlugin.MapHpGauge2.WindowOpacity;
      this.contentsOpacity = 255;
    }
  };

  // リフレッシュ
  Window_MapHpGauge2.prototype.refresh = function() {
    this.contents.clear();
    var actor = $gameParty.leader();
    if (actor) {
      this.refreshFace();
      for (var i = 0; i < 3; i++) {
        var gauge2 = TMPlugin.MapHpGauge2.Gauges2[i];
        this._lineHeight = gauge2.height;
        this.contents.fontSize = gauge2.fontSize;
        if (gauge2.type === 'HP') {
          this.drawActorHp(actor, gauge2.x, gauge2.y, gauge2.width);
        } else if (gauge2.type === 'MP') {
          this.drawActorMp(actor, gauge2.x, gauge2.y, gauge2.width);
        } else if (gauge2.type === 'TP') {
          this.drawActorTp(actor, gauge2.x, gauge2.y, gauge2.width);
        } else if (gauge2.type === 'VN') {
          var rate = this._gaugeParams2[i].max === 0 ? 0 :
                     this._gaugeParams2[i].param / this._gaugeParams2[i].max;
          var color1 = gauge2.color[0];
          var color2 = gauge2.color[1];
          this.drawGauge(gauge2.x, gauge2.y, gauge2.width, rate, color1, color2);
          this.changeTextColor(this.systemColor());
          this.drawText(gauge2.name, gauge2.x, gauge2.y, 44);
          this.changeTextColor(this.normalColor());
          this.drawText(this._gaugeParams2[i].param, gauge2.x + gauge2.width - 64,
                        gauge2.y, 64, 'right');
        }
      }
      for (var i = 0; i < TMPlugin.MapHpGauge2.StateIconMax; i++) {
        if (!this._icons[i]) break;
        var x = TMPlugin.MapHpGauge2.StateIconX + i * Window_Base._iconWidth;
        this.drawIcon(this._icons[i], x, TMPlugin.MapHpGauge2.StateIconY);
      }
      if (TMPlugin.MapHpGauge2.GoldWidth > 0) {
        this.drawCurrencyValue(this._gold, TextManager.currencyUnit, TMPlugin.MapHpGauge2.GoldX,
                               TMPlugin.MapHpGauge2.GoldY, TMPlugin.MapHpGauge2.GoldWidth);
      }
      this._lineHeight = 36;
    }
  };
  
  Window_MapHpGauge2.prototype.refreshFace = function() {
    var x = TMPlugin.MapHpGauge2.WindowWidth - 144 + TMPlugin.MapHpGauge2.FaceOffsetX;
    var y = TMPlugin.MapHpGauge2.FaceOffsetY;
    var height = Math.min(TMPlugin.MapHpGauge2.WindowHeight, 144);
    var actor = $gameParty.leader();
    this.drawFace(actor._faceName, actor._faceIndex, x, y, 144, height);
  };

  Window_MapHpGauge2.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {
    var bitmap = ImageManager.loadFace(faceName);
    if (bitmap.width === 0) {
      this._needFaceRefresh = true;
      return;
    }
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    var pw = Window_Base._faceWidth;
    var ph = Window_Base._faceHeight;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    var sx = faceIndex % 4 * pw + (pw - sw) / 2;
    var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
    this._needFaceRefresh = false;
  };

  //-----------------------------------------------------------------------------
  // Scene_Map
  //

  var _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function() {
    _Scene_Map_createDisplayObjects.call(this);
    this.createMapHpGaugeWindow2();
  };

  // HPゲージウィンドウの作成
  Scene_Map.prototype.createMapHpGaugeWindow2 = function() {
    this._mapHpGaugeWindow2 = new Window_MapHpGauge2();
    this.addChild(this._mapHpGaugeWindow2);
  };
  
  var _Scene_Map_launchBattle2 = Scene_Map.prototype.launchBattle2;
  Scene_Map.prototype.launchBattle2 = function() {
    this._mapHpGaugeWindow2.hide();
    this.removeChild(this._mapHpGaugeWindow2);
    this._mapHpGaugeWindow2 = null;
    _Scene_Map_launchBattle2.call(this);
  };

})();
