# Interact with retail IoT devices

## Hacking IoT devices with Prepackaged Software

### collection of upcoming and released iot devices
IOTLIST <http://iotlist.co/>

### sample of connected devices and github repos for your hacking pleasure
<i>The following devices have preset applications that interface with them, but the open source community have found take a look
behind the curtain and programatically leverage these and other devices like them outside of their prepackaged software.</i>

#### device: Fiet HomeBriet A19 <http://www.feit.com/products/bulbs/general-purpose/homebritehomebriteaom800-827-led-hbr/>
<b>Repo</b>: <https://github.com/nkaminski/csrmesh>
<i>Programatically interact with devices that communicated using a "mesh" network. This does not only work with Feit but with any device/group of devices that communicated using the CSRMesh BTLE protocol.</i>

#### device: Logitech Pop: Smart Button Controller <http://www.logitech.com/en-us/product/pop-home-switch>
<b>Repo</b>: https://github.com/brokeh/pophttp
<i>Change light settings using http requests.</i>

#### device: SwitchMate<Switchmate: Smart lighting made simple>
<b>Repo</b>: <https://github.com/search?utf8=%E2%9C%93&q=switchmate&type=>
<i>A collection of repos that programatically leverage the connected light switch device.</i>

## from scratch - leveraging an IoT application development platform - AWS IoT Platform

### Sensors and Starter Kits
<https://aws.amazon.com/iot-platform/getting-started/>

### Thing Registry
Keep track of devices, assign certificates and ensure safe, encrypted communication.
<http://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html>

### Device Gateway
Be able to communicate with or gather data from devices regardless of protocol.
<https://aws.amazon.com/iot-platform/faqs/#gateway>

### Rules Engine
Data collected from devices can trigger functionality (using AWS Lambda) when certain conditions set in Rules Engine.
<http://docs.aws.amazon.com/iot/latest/developerguide/config-and-test-rules.html>

### Device Shadow
Be able to read and set device state, even if the device is offline.
<http://docs.aws.amazon.com/iot/latest/developerguide/iot-thing-shadows.html>

### AWS Greengrass
Define and evolve device group and Lambda triggers. Once deployed, IoT application can run independent of the cloud, saving on cloud costs.
<https://aws.amazon.com/greengrass/>